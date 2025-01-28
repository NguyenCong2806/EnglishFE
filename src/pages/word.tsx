import { useEffect, useState } from "react";
import { addWordEnglish, updateFile } from "../AsyncThunk/WordAsyncThunk/wordasyncthunk";
import { wordstructuredto } from "../model/wordstructuredto";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectWord } from "../Slice/WordSlice";

function word() {
  const [word, setword] = useState("");
  const [imgae, setimgae] = useState<string>("");
  const [tag, settag] = useState<number>(1);
  const [file, setFile] = useState<any>(null);
  const [linkimage, setlinkimage] = useState<string>("");
  const dispatch = useAppDispatch();
  const wordsdto = new wordstructuredto();

  // Get the posts from the store
  const wordData = useAppSelector(selectWord);
  useEffect(() => {
    wordData
  }, [wordData])
  const handleImageChange = (e: any) => {
    setimgae(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  }
  const handleInputChange = (event: any) => {
    setword(event.target.value);
  };
  const handleSelecteChange = (event: any) => {
    settag(parseInt(event.target.value));
  };
  const UploadFile = async () => {
  const data = await dispatch(updateFile(file));
   setlinkimage(data.payload as string);
  }
  const savedata = () => {
    wordsdto.word = word;
    wordsdto.linkimage = linkimage;
    wordsdto.translate = "main";
    console.log(wordsdto);
    ///dispatch(addWordEnglish(wordsdto));

  }
  const reset = () => {
    setword("");
    setimgae("");
    setFile(null);
    setlinkimage("");
    settag(1);
  }
  return (
    <div className="row">
      <div className="col-md-6">
        <div>
          <div className="mb-3">
            <label className="form-label">Từ</label>
            <input type="text" onChange={handleInputChange} value={word} className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Tag</label>
            <select onChange={handleSelecteChange} value={tag} className="form-control">
              <option value={1}>đồ dùng học tập</option>
              <option value={2}>hành động</option>
              <option value={3}>hoạt động thường ngày</option>
              <option value={4}>chủ đề biển</option>
              <option value={5}>số</option>
              <option value={6}>mua sắm</option>
              <option value={7}>phòng ngủ</option>
              <option value={8}>tình bạn</option>
              <option value={9}>nhà bếp</option>
              <option value={10}>đồ trang sức</option>
              <option value={11}>môi trường</option>
              <option value={12}>phòng khách</option>
              <option value={13}>bệnh viện</option>
              <option value={14}>bệnh viện</option>
              <option value={15}>máy tính</option>
              <option value={16}>công việc nhà</option>
              <option value={17}>cửa hàng</option>
              <option value={18}>giải trí</option>
              <option value={19}>du lịch</option>
              <option value={20}>Tết trung thu</option>
              <option value={21}>thể thao</option>
              <option value={22}>quê hương</option>
              <option value={23}>đám cưới</option>
              <option value={24}>sân bay</option>
              <option value={25}>sức khỏe</option>
              <option value={26}>rau, củ, quả</option>
              <option value={27}>thời gian</option>
              <option value={28}>giao thông</option>
              <option value={29}>cảm xúc, cảm giác</option>
              <option value={30}>tính cách</option>
              <option value={31}>đồ uống</option>
              <option value={32}>các loài hoa</option>
              <option value={33}>phim ảnh</option>
              <option value={34}>bóng đá</option>
              <option value={35}>Giáng sinh</option>
              <option value={36}>đồ ăn</option>
              <option value={37}>âm nhạc</option>
              <option value={38}>tình yêu</option>
              <option value={39}>nhà hàng, khách sạn</option>
              <option value={40}>trường học</option>
              <option value={41}>màu sắc</option>
              <option value={42}>thời tiết</option>
              <option value={43}>quần áo</option>
              <option value={44}>bộ phận cơ thể</option>
              <option value={45}>giáo dục</option>
              <option value={46}>gia đình</option>
              <option value={47}>trái cây</option>
              <option value={48}>động vật</option>
              <option value={49}>côn trùng</option>
              <option value={50}>học tập</option>
              <option value={51}>thực vật</option>
              <option value={52}>quốc gia</option>
              <option value={53}>hải sản</option>
              <option value={54}>năng lượng</option>
              <option value={55}>nghề nghiệp</option>
              <option value={56}>chế độ ăn uống</option>
              <option value={57}>thảm họa thiên nhiên</option>
              <option value={58}>chỉ đường</option>
              <option value={59}>phòng khách sạn</option>
              <option value={60}>bưu điện</option>
              <option value={61}>ngân hàng</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Nhập file ảnh</label>
            <input onChange={handleImageChange} className="form-control form-control-sm" type="file" />
          </div>
          <div className="mb-3">
            <img src={imgae} className="rounded mx-auto d-block" alt="..." />
            <input className="form-control" type="text" value={linkimage} disabled readOnly></input>
            <button onClick={UploadFile} className="btn btn-primary">Lưu ảnh</button>
          </div>
          <button onClick={savedata} className="btn btn-primary w-100">Lưu lại</button>
        </div>
      </div>
    </div>
  )
}

export default word;