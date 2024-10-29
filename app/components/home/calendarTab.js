import React, { useState } from 'react';
import { format } from "date-fns";
import {StyleSheet, Text, View} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

function CalendarTab() {

  const posts = [
    {
      id: 1,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2024-10-26",
    },
    {
      id: 2,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2024-10-27",
    }
  ];
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    }
  }

  return (
    <View style={{flex: 2}}>
        <Calendar 
        markedDates={markedSelectedDates}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }} 
        onDayPress={(day) => {
          setSelectedDate(day.dateString)
        }} />
    </View>
  );
}
  
  const styles = StyleSheet.create({
    
  });


export default CalendarTab;