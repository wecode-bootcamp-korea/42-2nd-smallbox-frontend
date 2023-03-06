import DatePicker from './DatePicker';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';

function DateComponent() {
  const selectedDay = val => {
    const finalDate = val;
  };

  return (
    <BookingDateContainer>
      <DatePicker
        locale={ko}
        getSelectedDay={selectedDay}
        endDate={12}
        selectDate={new Date()}
        labelFormat="MMMM"
        color="#7063FF"
      />
    </BookingDateContainer>
  );
}

export default DateComponent;

const BookingDateContainer = styled.div`
  z-index: 0;
`;
