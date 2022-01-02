export const MuiCard = {
  styleOverrides: {
    // Name of the slot
    root: {
      // Some CSS
      color: 'rgb(43, 52, 69)',
      boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      margin: 'auto',
      overflow: 'hidden',
      transition: 'all 250ms ease-in-out 0s',
      '&:hover': { boxShadow: '0 6px 12px rgba(0,0,0,.08)' },
    },
  },
}
