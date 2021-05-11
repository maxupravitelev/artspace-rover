const elevatedDivBase = {
  padding: '2em',
  margin: '0.5em',
  backgroundColor: '#FBFBFF',
  textAlign: 'center',
  borderWidth: '2px',
  boxShadow: '2px 2px 5px 1px #01BAEF',
  width: 'auto',
}

export const styles = {
  container: {
    display: 'flex-start',
    textAlign: 'initial',
    justifyContent: 'space-between',
  },
  elevatedDiv: elevatedDivBase,
  jitsiSession: {
    ...elevatedDivBase,
    textAlign: '-webkit-center'
  },
  dashboard: {
    display: 'inline-block',
    margin: '0 auto 1em',
  },
  header: {
    ...elevatedDivBase,
    width: '50%',
    margin: '5em auto 1em',
    maxWidth: 'max-content',
  },
  sectionHeadline: {
    marginBottom: "1em", 
    backgroundColor: "#0B4F6C", 
    color: "#FBFBFF" 
    }
}

