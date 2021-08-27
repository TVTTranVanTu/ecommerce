import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailAction } from "../../Actions/UserAction";
import { UPDATE_USER_DETAIL_RESET } from "../../Constants/UserConstants";
import UserInfor from "./UserInfor";

function Profile(props) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetail = useSelector((state) => state.userDetail);
  const { loading: userLoading, error: userError, userInfor } = userDetail;

  const updateUserDetail = useSelector((state) => state.updateUserDetail);
  const { success } = updateUserDetail;
  useEffect(() => {
    userInfo && dispatch(userDetailAction(userInfo.userDto.id));
    success && dispatch({ type: UPDATE_USER_DETAIL_RESET });
  }, [dispatch, userInfo, success]);
  return (
    <div className="my-account-section">
      <div className="my-account-section__header">
        <div className="my-account-section__header-left">
          <div className="my-account-section__header-title">Hồ sơ của tôi</div>
          <div className="my-account-section__header-subtitle">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </div>
        </div>
      </div>
      {userLoading
        ? ""
        : userError
        ? ""
        : userInfor && <UserInfor userInfor={userInfor} />}
    </div>
  );
}

export default Profile;
