'use client';

import React, { useState } from 'react';
import styles from './CodeTerminal.module.css';

interface CodeTerminalProps {
  cliCommand: string;
  codePreview: string;
}

export const CodeTerminal: React.FC<CodeTerminalProps> = ({ cliCommand, codePreview }) => {
  const [copiedCli, setCopiedCli] = useState(false);
  const [copiedYaml, setCopiedYaml] = useState(false);

  const copyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copyYaml = () => {
    navigator.clipboard.writeText(codePreview);
    setCopiedYaml(true);
    setTimeout(() => setCopiedYaml(false), 2000);
  };

  return (
    <div className={styles.terminalContainer}>
      {/* CLI Section */}
      <div className={styles.terminalBlock}>
        <div className={styles.terminalHeader}>
          <div className={styles.headerDotGroup}>
            <span className={`${styles.headerDot} ${styles.dotRed}`} />
            <span className={`${styles.headerDot} ${styles.dotYellow}`} />
            <span className={`${styles.headerDot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.terminalTitle}>bash</span>
          <button type="button" className={styles.copyBtn} onClick={copyCli} aria-label="Copy CLI Command">
            {copiedCli ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className={styles.cliBody}>
          <span className={styles.promptChar}>$</span>
          <code className={styles.cliCode}>{cliCommand}</code>
        </div>
      </div>

      {/* Editor Section */}
      <div className={styles.editorBlock}>
        <div className={styles.terminalHeader}>
          <div className={styles.headerDotGroup}>
            <span className={`${styles.headerDot} ${styles.dotRed}`} />
            <span className={`${styles.headerDot} ${styles.dotYellow}`} />
            <span className={`${styles.headerDot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.terminalTitle}>pipeline.yaml</span>
          <button type="button" className={styles.copyBtn} onClick={copyYaml} aria-label="Copy Configuration YAML">
            {copiedYaml ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className={styles.editorBody}>
          <code>{codePreview}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTerminal;
