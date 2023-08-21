import "./topBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1 className="title">Top Deals</h1>
      <div className="listItem">
        {topDealUsers.map((user) => {
          return (
            <div className="userItem" key={user.id}>
              <div className="user">
                <img src={user.img} alt="" />
                <div className="userInfo">
                  <span className="username">{user.username}</span>
                  <span className="email">{user.email}</span>
                </div>
              </div>
              <span className="amount">{`$ ${user.amount}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBox;
