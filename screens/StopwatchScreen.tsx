import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import Button from '../components/Button/Button';


const StopwatchScreen = () => {
  const [start, setStart] = useState(false);
  const [secs, setSecs] = useState(dayjs().startOf('day'));
  let intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setSecs((prev) => prev.add(1, 'second'));
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [start]);



  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={{color: 'white', fontSize: 24}}>{secs.format('HH:mm:ss')}</Text>
      </View>

      <View style={styles.buttons}>
        <Button
          title={!start ? 'start' : '->'}
          onPress={() => setStart(!start)}
          btnStyle={!start ? styles.startBtn : styles.disabledBtn}
          textStyle={styles.btnText}
          isDisabled={start}
        />
        <Button
          title={'stop'}
          onPress={() => setStart(false)}
          btnStyle={styles.stopBtn}
          textStyle={styles.btnText}
          isDisabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#352929',
  },
  countContainer: {
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36
  },
  stopBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c32222',
    borderColor: '#fc3333',
    borderWidth: 1,
    borderRadius: 50,
    width: 100,
    height: 100,
    padding: 5,

    marginRight: 20,
  },
  startBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e8211',
    borderColor: '#46f140',
    borderWidth: 1,
    borderRadius: 50,
    width: 100,
    height: 100,
    padding: 2,

    marginRight: 20
  },
  disabledBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#585757',
    borderColor: '#bababa',
    borderWidth: 1,
    borderRadius: 50,
    width: 100,
    height: 100,
    padding: 5,

    marginRight: 20,
  }
});

export default StopwatchScreen;
