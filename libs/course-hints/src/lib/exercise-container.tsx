/* eslint-disable react/display-name */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import remarkEmojiPlugin from 'remark-emoji';

const renderers = {
  code: ({className = '', children, ...props}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={className.replace('language-', '')} children={children} {...props}/>;
  },
};

// Fuck TS
const getPalette = theme => theme.palette;
const getTypography = theme => theme.typography;
const getSpacing = theme => theme.spacing;

const useStyles = makeStyles(theme => ({
  position: {
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  dialog: {
    maxHeight: 'unset',
    padding: '2em',

    '& pre > code': {
      background: 'inherit',
    },
    '&  code': {
      background: 'lightgrey',
    },
    '& blockquote': {
      boxShadow:
        '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
      borderRadius: '4px',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      padding: '20px',
      borderLeft: '5px solid #3f51b5',
    },

    '& p': {
      lineHeight: '25px',
    },
  },
  table: {
    '& table': {
      display: 'table',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,

      '& tr': {
        color: 'inherit',
        display: 'table-row',
        verticalAlign: 'middle',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        '&$hover:hover': {
          backgroundColor: getPalette(theme).action.hover,
        },
        '&$selected, &$selected:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      },

      '& th, td': {
        ...getTypography(theme).body2,
        fontSize: '15px',
        display: 'table-cell',
        verticalAlign: 'inherit',
        // Workaround for a rendering bug with spanned columns in Chrome 62.0.
        // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
        borderBottom: `1px solid rgba(0,0,0,0.25)`,
        textAlign: 'left',
        padding: getSpacing(theme)(2),
      },
      '& th': {
        fontWeight: 'bold',
        backgroundColor: getPalette(theme).primary.main,
        color: getPalette(theme).primary.contrastText,
      },
      '& tr:nth-child(2n+1)': {
        backgroundColor: lighten(getPalette(theme).primary.light, 0.9),
      },
    },
  },
}));

export function SeeHints() {
  const [open, setOpen] = React.useState(false);
  const [markdownFile, setMarkdownFile] = React.useState('');

  const theme = useTheme();

  const classes = useStyles(theme);


  React.useEffect(() => {
    fetch('assets/README.md')
      .then(res => res.text())
      .then(setMarkdownFile)
      .catch(console.error);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
  );
}

/* eslint-disable-next-line */
export interface ExerciseContainerProps {}

export const ExerciseContainer = ({ children }) => (
  <>
    {children}
    <SeeHints />
  </>
  );




export default ExerciseContainer;
