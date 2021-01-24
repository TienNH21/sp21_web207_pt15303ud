function Student(props) {
  const listHocLai = props.data.hoc_lai
    .map(function (value, index) {
      return (
        <li key={index}>
          { value.code } - { value.name }
        </li>
      );
    });

  const element = (
    <ul>
      <li>Họ Tên: { props.data.ho_ten }</li>
      <li>Ngày sinh: { props.data.ngay_sinh }</li>
      <li>Địa chỉ: { props.data.dia_chi }</li>
      <li>
        Trạng thái:
        {
          props.data.trang_thai == true ?
            'Đã Tốt Nghiệp' :
            'Chưa tốt nghiệp'
        }
      </li>
      <li>Các môn học lại:
        <ul>
          { listHocLai }
        </ul>
      </li>
    </ul>
  );

  return element;
}

export default Student;
