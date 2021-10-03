import { makeStyles } from '@material-ui/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

export const useStyles = makeStyles(theme => ({
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
          backgroundColor: theme.palette.action.hover,
        },
        '&$selected, &$selected:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      },

      '& th, td': {
        ...theme.typography.body2,
        fontSize: '15px',
        display: 'table-cell',
        verticalAlign: 'inherit',
        // Workaround for a rendering bug with spanned columns in Chrome 62.0.
        // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
        borderBottom: `1px solid rgba(0,0,0,0.25)`,
        textAlign: 'left',
        padding: theme.spacing(2),
      },
      '& th': {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      '& tr:nth-child(2n+1)': {
        backgroundColor: lighten(theme.palette.primary.light, 0.9),
      },
    },
  },
}));
