import {useState } from 'react'
import Button from '@mui/material/Button';
import { Avatar, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ActivateValue } from '../../service/GetValue';

function WordForm() {
    const [word, setword] = useState("");
    const [imgae, setimgae] = useState<string>("");
    const [tag, settag] = useState<number>(1);
    const [file, setFile] = useState<any>(null);
    const active = new ActivateValue();
    const [linkimage, setlinkimage] = useState<string>("");
    const handleImageChange = (e: any) => {
        setimgae(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    }
    const handleInputChange = (event: any) => {
        setword(event.target.value);
    };
    const handleSelecteChange = (event: SelectChangeEvent) => {
        settag(parseInt(event.target.value));
    };
    const UploadFile = async () => {
        setlinkimage(await active.UploadFile(file));
    }
    const savedata = async () => {
        await active.getvalueword(word, linkimage, tag);
        setword("");
        setimgae("");
        setFile(null);
        setlinkimage("");
       
        settag(1);
    }
    return (

        <div className='form_main'>
            <div>
                <TextField onChange={handleInputChange} value={word} fullWidth type='text' label="Enter word ..." variant="standard" margin="normal" />
            </div>
            <div>
                <Select
                    value={tag.toString()}
                    onChange={handleSelecteChange}
                    displayEmpty
                    fullWidth
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={1}>Từ vựng về đồ dùng học tập</MenuItem>
                    <MenuItem value={2}>Từ vựng về hành động</MenuItem>
                    <MenuItem value={3}>Từ vựng về hoạt động thường ngày</MenuItem>
                    <MenuItem value={4}>Từ vựng về chủ đề biển</MenuItem>
                    <MenuItem value={5}>Từ vựng về số</MenuItem>
                    <MenuItem value={6}>Từ vựng về mua sắm</MenuItem>
                    <MenuItem value={7}>Từ vựng về phòng ngủ</MenuItem>
                    <MenuItem value={8}>Từ vựng về tình bạn</MenuItem>
                    <MenuItem value={9}>Từ vựng về nhà bếp</MenuItem>
                    <MenuItem value={10}>Từ vựng về đồ trang sức</MenuItem>
                    <MenuItem value={11}>Từ vựng về môi trường</MenuItem>
                    <MenuItem value={12}>Từ vựng về phòng khách</MenuItem>
                    <MenuItem value={13}>Từ vựng về bệnh viện</MenuItem>
                    <MenuItem value={14}>Từ vựng về bệnh viện</MenuItem>
                    <MenuItem value={15}>Từ vựng về máy tính</MenuItem>
                    <MenuItem value={16}>Từ vựng về công việc nhà</MenuItem>
                    <MenuItem value={17}>Từ vựng về cửa hàng</MenuItem>
                    <MenuItem value={18}>Từ vựng về giải trí</MenuItem>
                    <MenuItem value={19}>Từ vựng về du lịch</MenuItem>
                    <MenuItem value={20}>Từ vựng về Tết trung thu</MenuItem>
                    <MenuItem value={21}>Từ vựng về thể thao</MenuItem>
                    <MenuItem value={22}>Từ vựng về quê hương</MenuItem>
                    <MenuItem value={23}>Từ vựng về đám cưới</MenuItem>
                    <MenuItem value={24}>Từ vựng về sân bay</MenuItem>
                    <MenuItem value={25}>Từ vựng về sức khỏe</MenuItem>
                    <MenuItem value={26}>Từ vựng về rau, củ, quả</MenuItem>
                    <MenuItem value={27}>Từ vựng về thời gian</MenuItem>
                    <MenuItem value={28}>Từ vựng về giao thông</MenuItem>
                    <MenuItem value={29}>Từ vựng về cảm xúc, cảm giác</MenuItem>
                    <MenuItem value={30}>Từ vựng về tính cách</MenuItem>
                    <MenuItem value={31}>Từ vựng về đồ uống</MenuItem>
                    <MenuItem value={32}>Từ vựng về các loài hoa</MenuItem>
                    <MenuItem value={33}>Từ vựng về phim ảnh</MenuItem>
                    <MenuItem value={34}>Từ vựng về bóng đá</MenuItem>
                    <MenuItem value={35}>Từ vựng về Giáng sinh</MenuItem>
                    <MenuItem value={36}>Từ vựng về đồ ăn</MenuItem>
                    <MenuItem value={37}>Từ vựng về âm nhạc</MenuItem>
                    <MenuItem value={38}>Từ vựng về tình yêu</MenuItem>
                    <MenuItem value={39}>Từ vựng về nhà hàng, khách sạn</MenuItem>
                    <MenuItem value={40}>Từ vựng về trường học</MenuItem>
                    <MenuItem value={41}>Từ vựng về màu sắc</MenuItem>
                    <MenuItem value={42}>Từ vựng về thời tiết</MenuItem>
                    <MenuItem value={43}>Từ vựng về quần áo</MenuItem>
                    <MenuItem value={44}>Từ vựng về bộ phận cơ thể</MenuItem>
                    <MenuItem value={45}>Từ vựng về giáo dục</MenuItem>
                    <MenuItem value={46}>Từ vựng về gia đình</MenuItem>
                    <MenuItem value={47}>Từ vựng về trái cây</MenuItem>
                    <MenuItem value={48}>Từ vựng về động vật</MenuItem>
                    <MenuItem value={49}>Từ vựng về côn trùng</MenuItem>
                    <MenuItem value={50}>Từ vựng về học tập</MenuItem>
                    <MenuItem value={51}>Từ vựng về thực vật</MenuItem>
                    <MenuItem value={52}>Từ vựng về quốc gia</MenuItem>
                    <MenuItem value={53}>Từ vựng về hải sản</MenuItem>
                    <MenuItem value={54}>Từ vựng về năng lượng</MenuItem>
                    <MenuItem value={55}>Từ vựng về nghề nghiệp</MenuItem>
                    <MenuItem value={56}>Từ vựng về chế độ ăn uống</MenuItem>
                    <MenuItem value={57}>Từ vựng về thảm họa thiên nhiên</MenuItem>
                    <MenuItem value={58}>Từ vựng về chỉ đường</MenuItem>
                    <MenuItem value={59}>Từ vựng về phòng khách sạn</MenuItem>
                    <MenuItem value={60}>Từ vựng về bưu điện</MenuItem>
                    <MenuItem value={61}>Từ vựng về ngân hàng</MenuItem>

                </Select>
            </div>
            <div>
                <TextField type='file'  fullWidth variant="filled" margin="normal" onChange={handleImageChange} />
                <TextField value={linkimage} type='text' fullWidth disabled variant="standard" margin="normal" />
            </div>
            <div >
                <Avatar
                    alt="Image"
                    src={imgae}
                    sx={{ width: 200, height: 200 }}
                    variant="rounded"
                />
                <Button onClick={UploadFile} fullWidth variant="outlined">Save Image</Button>
            </div>
            <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={savedata}>
                Save
            </Button>

        </div>

    )
}

export default WordForm;
