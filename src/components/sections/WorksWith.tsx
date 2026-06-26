'use client';

import React, { useState, useEffect, useRef } from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';
import { LinkIcon, CubeIcon, CogIcon, ArrowPathIcon, ChartPieIcon } from '../icons';
import styles from './WorksWith.module.css';

interface LogLine {
  time: string;
  type: 'info' | 'success' | 'warn' | 'error';
  message: string;
}

export const WorksWith: React.FC = () => {
  const { worksWith } = contentConfig;
  
  // State for Source and Destination selections
  const [source, setSource] = useState<'postgresql' | 'aws-s3'>('postgresql');
  const [destination, setDestination] = useState<'snowflake' | 'bigquery' | 'docker'>('snowflake');
  
  // Play state
  const [syncing, setSyncing] = useState<boolean>(true);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [metricSynced, setMetricSynced] = useState<number>(0);
  const [metricLatency, setMetricLatency] = useState<number>(24);
  const [metricRate, setMetricRate] = useState<number>(45.2);
  
  const consoleBodyRef = useRef<HTMLDivElement>(null);

  const getSourceDisplayName = (src: string) => {
    return src === 'postgresql' ? 'PostgreSQL' : 'AWS S3';
  };

  const getDestDisplayName = (dest: string) => {
    if (dest === 'snowflake') return 'Snowflake';
    if (dest === 'bigquery') return 'BigQuery';
    return 'Docker';
  };

  const getConnectorIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'postgresql': return CubeIcon;
      case 'snowflake': return ArrowPathIcon;
      case 'bigquery': return ChartPieIcon;
      case 'aws-s3':
      case 'aws s3': return LinkIcon;
      case 'docker': return CogIcon;
      default: return LinkIcon;
    }
  };

  // Trigger sync animation when Source or Destination changes
  useEffect(() => {
    setSyncing(true);
    setLogs([]);
    
    // Animate metric rates
    const targetRate = parseFloat((30 + Math.random() * 25).toFixed(1));
    const targetLatency = Math.floor(15 + Math.random() * 15);
    setMetricRate(targetRate);
    setMetricLatency(targetLatency);
    
    // Animate count up of records
    let currentRecords = 0;
    const targetRecords = Math.floor(500000 + Math.random() * 1500000);
    const stepRecords = targetRecords / 20;
    
    const logsSequence: Omit<LogLine, 'time'>[] = [
      { type: 'info', message: `INIT_SYNC: Establishing secure connection to ${getSourceDisplayName(source)}...` },
      { type: 'info', message: `METADATA_LOAD: Read schema. Discovered 18 tables with primary keys.` },
      { type: 'info', message: `SCHEMA_ALIGN: Auto-mapping database schemas to destination ${getDestDisplayName(destination)}...` },
      { type: 'info', message: `VALIDATE: In-memory schema matching verified. 0 warnings, 0 mismatches.` },
      { type: 'info', message: `INGESTION_RUN: Syncing database blocks at ${targetRate} MB/s...` },
      { type: 'success', message: `SUCCESS: Ingestion completed. Synced ${targetRecords.toLocaleString()} rows in ${targetLatency}ms.` }
    ];

    let logIdx = 0;
    const logTimer = setInterval(() => {
      if (logIdx < logsSequence.length) {
        const date = new Date();
        const timeStr = date.toTimeString().split(' ')[0] + '.' + String(date.getMilliseconds()).padStart(3, '0').slice(0, 2);
        
        setLogs((prev) => [...prev, { ...logsSequence[logIdx], time: timeStr }]);
        
        // Count up records synced at the ingestion run step
        if (logIdx === 4) {
          const recordTimer = setInterval(() => {
            currentRecords += stepRecords;
            if (currentRecords >= targetRecords) {
              setMetricSynced(targetRecords);
              clearInterval(recordTimer);
            } else {
              setMetricSynced(Math.floor(currentRecords));
            }
          }, 30);
        }
        
        logIdx++;
      } else {
        setSyncing(false);
        clearInterval(logTimer);
      }
    }, 600);

    return () => clearInterval(logTimer);
  }, [source, destination]);

  // Scroll console to bottom
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const PostgresIcon = getConnectorIcon('postgresql');
  const S3Icon = getConnectorIcon('aws-s3');
  const SnowflakeIcon = getConnectorIcon('snowflake');
  const BigQueryIcon = getConnectorIcon('bigquery');
  const DockerIcon = getConnectorIcon('docker');

  return (
    <section id="works-with" className={styles.section} aria-labelledby="integrations-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{worksWith.badge}</Badge>
          </div>
          <h2 id="integrations-title" className={styles.title}>{worksWith.title}</h2>
          <p className={styles.description}>{worksWith.description}</p>
        </div>

        {/* Dynamic Sandbox Playground Grid */}
        <div className={styles.sandboxGrid}>
          
          {/* 1. Left Column: Sources */}
          <div className={styles.columnPanel}>
            <h3 className={styles.panelTitle}>Choose Source</h3>
            <div className={styles.nodeList}>
              <button
                type="button"
                onClick={() => setSource('postgresql')}
                className={`${styles.selectButton} ${source === 'postgresql' ? styles.btnActiveSource : ''}`}
                aria-pressed={source === 'postgresql'}
              >
                <Card variant="bento" className={styles.innerCard}>
                  <div className={styles.nodeContent}>
                    <PostgresIcon className={styles.nodeIcon} />
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeName}>PostgreSQL</span>
                      <span className={styles.nodeStatusLabel}>Database</span>
                    </div>
                  </div>
                </Card>
              </button>

              <button
                type="button"
                onClick={() => setSource('aws-s3')}
                className={`${styles.selectButton} ${source === 'aws-s3' ? styles.btnActiveSource : ''}`}
                aria-pressed={source === 'aws-s3'}
              >
                <Card variant="bento" className={styles.innerCard}>
                  <div className={styles.nodeContent}>
                    <S3Icon className={styles.nodeIcon} />
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeName}>AWS S3</span>
                      <span className={styles.nodeStatusLabel}>Object Store</span>
                    </div>
                  </div>
                </Card>
              </button>
            </div>
          </div>

          {/* 2. Middle Column: Flow Engine & Console */}
          <div className={styles.centerPanel}>
            
            {/* Visual SVG Ingestion Hub with Active Flows */}
            <div className={styles.visualCanvas}>
              
              {/* SVG Animated Beams */}
              <svg className={styles.svgBeams} viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true">
                {/* Source connections to Core */}
                <path 
                  d="M 50 40 Q 150 40 200 90" 
                  className={`${styles.beamPath} ${source === 'postgresql' ? styles.beamActive : ''}`} 
                />
                <path 
                  d="M 50 140 Q 150 140 200 90" 
                  className={`${styles.beamPath} ${source === 'aws-s3' ? styles.beamActive : ''}`} 
                />

                {/* Destination connections from Core */}
                <path 
                  d="M 200 90 Q 250 40 350 40" 
                  className={`${styles.beamPath} ${destination === 'snowflake' ? styles.beamActive : ''}`} 
                />
                <path 
                  d="M 200 90 L 350 90" 
                  className={`${styles.beamPath} ${destination === 'bigquery' ? styles.beamActive : ''}`} 
                />
                <path 
                  d="M 200 90 Q 250 140 350 140" 
                  className={`${styles.beamPath} ${destination === 'docker' ? styles.beamActive : ''}`} 
                />
              </svg>

              {/* Central Core Engine Node */}
              <div className={`${styles.coreEngineNode} ${syncing ? styles.coreSpinning : ''}`}>
                <div className={styles.coreRingOuter}>
                  <div className={styles.coreRingInner}>
                    <CogIcon className={styles.coreIcon} />
                  </div>
                </div>
                <div className={styles.coreStatusLight} />
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className={styles.metricsBar}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>SYNC RATE</span>
                <span className={styles.metricValue}>{metricRate} MB/s</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>ROWS SYNCED</span>
                <span className={styles.metricValue}>{metricSynced.toLocaleString()}</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>LATENCY</span>
                <span className={styles.metricValue}>{metricLatency}ms</span>
              </div>
            </div>

            {/* Console Log Terminal */}
            <div className={styles.consoleBox}>
              <div className={styles.consoleHeader}>
                <div className={styles.consoleDots}>
                  <span className={styles.dotClose} />
                  <span className={styles.dotMinimize} />
                  <span className={styles.dotExpand} />
                </div>
                <span className={styles.consoleTitle}>DataFlow Live Sync Console</span>
                <span className={styles.statusPulse}>{syncing ? 'RUNNING' : 'IDLE'}</span>
              </div>
              <div ref={consoleBodyRef} className={styles.consoleBody}>
                {logs.map((log, idx) => (
                  <div key={idx} className={`${styles.consoleLogLine} ${styles[log.type]}`}>
                    <span className={styles.logTime}>[{log.time}]</span>
                    <span className={styles.logMsg}>{log.message}</span>
                  </div>
                ))}
                {syncing && (
                  <div className={styles.consoleCursorLine}>
                    <span className={styles.consoleBlinker}>_</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* 3. Right Column: Destinations */}
          <div className={styles.columnPanel}>
            <h3 className={styles.panelTitle}>Choose Target</h3>
            <div className={styles.nodeList}>
              <button
                type="button"
                onClick={() => setDestination('snowflake')}
                className={`${styles.selectButton} ${destination === 'snowflake' ? styles.btnActiveDest : ''}`}
                aria-pressed={destination === 'snowflake'}
              >
                <Card variant="bento" className={styles.innerCard}>
                  <div className={styles.nodeContent}>
                    <SnowflakeIcon className={styles.nodeIcon} />
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeName}>Snowflake</span>
                      <span className={styles.nodeStatusLabel}>Warehouse</span>
                    </div>
                  </div>
                </Card>
              </button>

              <button
                type="button"
                onClick={() => setDestination('bigquery')}
                className={`${styles.selectButton} ${destination === 'bigquery' ? styles.btnActiveDest : ''}`}
                aria-pressed={destination === 'bigquery'}
              >
                <Card variant="bento" className={styles.innerCard}>
                  <div className={styles.nodeContent}>
                    <BigQueryIcon className={styles.nodeIcon} />
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeName}>BigQuery</span>
                      <span className={styles.nodeStatusLabel}>Cloud Data Lake</span>
                    </div>
                  </div>
                </Card>
              </button>

              <button
                type="button"
                onClick={() => setDestination('docker')}
                className={`${styles.selectButton} ${destination === 'docker' ? styles.btnActiveDest : ''}`}
                aria-pressed={destination === 'docker'}
              >
                <Card variant="bento" className={styles.innerCard}>
                  <div className={styles.nodeContent}>
                    <DockerIcon className={styles.nodeIcon} />
                    <div className={styles.nodeMeta}>
                      <span className={styles.nodeName}>Docker</span>
                      <span className={styles.nodeStatusLabel}>Registry Sink</span>
                    </div>
                  </div>
                </Card>
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default WorksWith;
