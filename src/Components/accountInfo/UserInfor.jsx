import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserDetailAction } from "../../Actions/UserAction";
import { storage } from "../../firebase/firebase";

function UserInfor(props) {
  const { userInfor } = props;
  const id = userInfor.id;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(userInfor.userName);
  const [fullName, setFullName] = useState(userInfor.userName);
  const [email, setEmail] = useState(userInfor.email);
  const [gender, setGender] = useState(userInfor.gender);
  const [avatar, setAvatar] = useState(userInfor.avatar);
  const [address, setAddress] = useState(userInfor.address);
  const [phoneNumber, setPhoneNumber] = useState(userInfor.phoneNumber);
  const [dateofbirth, setDateofbirth] = useState(userInfor.dateofbirth);
  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const avatar = event.target.files[0];
      setAvatar(avatar);
      const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(avatar.name)
            .getDownloadURL()
            .then((url) => {
              setAvatar(url);
            });
        }
      );
    }
  };
  const params = {
    id: id,
    avatar: avatar,
    createdAt: "",
    userName: userName,
    email: email,
    fullName: fullName,
    address: address,
    phoneNumber: phoneNumber,
    gender: gender,
    dateofbirth: dateofbirth,
  };
  const updateUser = () => {
    params && dispatch(updateUserDetailAction(params));
  };
  return (
    <div className="my-account-profile">
      <div className="my-account-profile__left">
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Tên đăng nhập</label>
            </div>
            <div className="input-with-label__content">
              <div className="my-account__inline-container">
                <div className="my-account__input-text">{userName}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Tên</label>
            </div>
            <div className="input-with-label__content">
              <div className="input-with-validator">
                <input
                  type="text"
                  placeholder="Nhập vào tên của bạn"
                  value={fullName}
                  maxLength="255"
                  onChange={(e) => setFullName(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Email</label>
            </div>
            <div className="input-with-label__content">
              <div className="my-account__inline-container">
                <div className="my-account__input-text">{email}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Địa chỉ</label>
            </div>
            <div className="input-with-label__content">
              <div className="input-with-validator">
                <input
                  type="text"
                  placeholder="Nhập vào địa chỉ của bạn của bạn"
                  value={address}
                  maxLength="255"
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Số điện thoại</label>
            </div>
            <div className="input-with-label__content">
              <div className="input-with-validator">
                <input
                  type="text"
                  placeholder="Nhập vào tên của bạn"
                  value={phoneNumber}
                  maxLength="255"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Giới tính</label>
            </div>
            <div className="input-with-label__content">
              <div className="my-account-profile__gender">
                <label htmlFor="nam" className="radio">
                  <input
                    type="radio"
                    name="gender"
                    id="nam"
                    value="nam"
                    checked={gender === "nam"}
                    onChange={(e) => setGender(e.target.value)}
                    className="radio__input"
                  />
                  <div className="radio__radio"></div>
                  Nam
                </label>
                <label htmlFor="nu" className="radio">
                  <input
                    type="radio"
                    name="gender"
                    id="nu"
                    value="nu"
                    checked={gender === "nu"}
                    onChange={(e) => setGender(e.target.value)}
                    className="radio__input"
                  />
                  <div className="radio__radio"></div>
                  Nữ
                </label>
                <label htmlFor="khac" className="radio">
                  <input
                    type="radio"
                    name="gender"
                    id="khac"
                    value="khac"
                    checked={gender === "khac"}
                    onChange={(e) => setGender(e.target.value)}
                    className="radio__input"
                  />
                  <div className="radio__radio"></div>
                  Khác
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="input-with-label">
          <div className="input-with-label__wrapper">
            <div className="input-with-label__label">
              <label>Ngày sinh</label>
            </div>
            <div className="input-with-label__content">
              <div className="input-with-validator">
                <input
                  type="text"
                  placeholder="Nhập vào tên của bạn"
                  value={dateofbirth}
                  maxLength="255"
                  onChange={(e) => setDateofbirth(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-account-profile__right">
        <div className="avatar-uploader">
          <div className="avatar-uploader__avatar">
            <div
              className="avatar-uploader__avatar-image"
              style={{
                backgroundImage: `url(${
                  avatar
                    ? avatar
                    : "https://cf.shopee.vn/file/5f124aa512e665915146f70c5f654b98_tn"
                })`,
              }}
            ></div>
          </div>
          <div className="upload_image">
            <input
              className="avatar-uploader__file-input"
              type="file"
              name="file"
              onChange={handleChangeImage}
              accept=".jpg,.jpeg,.png"
            />
            <button type="button" className="btn btn-light btn--m btn--inline">
              Chọn ảnh
            </button>
          </div>
          <div className="avatar-uploader__text-container">
            <div className="avatar-uploader__text">
              Dụng lượng file tối đa 1 MB
            </div>
            <div className="avatar-uploader__text">Định dạng:.JPEG, .PNG</div>
          </div>
        </div>
        <button
          type="button"
          onClick={updateUser}
          className="save-button btn btn-light btn--m btn--inline"
        >
          <span>Lưu</span>
        </button>
      </div>
    </div>
  );
}

export default UserInfor;
