import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useTheme } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import remarkEmojiPlugin from 'remark-emoji';

import { useStyles } from './useStyles.hook';

export interface CodeRendererProps {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

const renderers = {
  code: ({ className = '', children, inline }: CodeRendererProps) => {
    return inline ? (
      <code className={className}>{children}</code>
    ) : (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={className.replace('language-', '')}
        children={children}
      />
    );
  },
};

const STATUS = {
  success: 'success',
  failure: 'failure',
};

export function SeeHints() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<null | string>(null);
  const [markdownFile, setMarkdownFile] = useState('');

  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    fetch('assets/README.md')
      .then(res => res.text())
      .then(setMarkdownFile)
      .then(() => setStatus(STATUS.success))
      .catch(error => {
        setStatus(STATUS.failure);
        console.error(error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return status === STATUS.success ? (
    <div className={classes.position}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        README
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        scroll="body"
        onClose={handleClose}
        open={open}
        PaperProps={{ className: classes.dialog }}
      >
        <ReactMarkdown
          className={classes.table}
          remarkPlugins={[gfm, remarkEmojiPlugin]}
          components={renderers}
          children={markdownFile}
        />
      </Dialog>
    </div>
  ) : null;
}

export interface ExerciseContainerProps {
  children: React.ReactNode;
}

export const ExerciseContainer = ({ children }: ExerciseContainerProps) => (
  <>
    {children}
    <SeeHints />
  </>
);
