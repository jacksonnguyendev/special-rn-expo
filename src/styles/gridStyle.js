import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justiSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centerBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  flex1: {
    flex: 1,
  },
  flex0: {
    flex: 0,
  },
  wrap: {
    flexWrap: 'wrap',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

