import React from "react";

const Header = () => {
  return (
    <div className="DriBodyCon-header">
      <div className="DriBodyCon-header--user">
        <div class="DriBodyCon-header--user--img">
          <a href="#">
            <img
              class="photo"
              alt="Eren ツ"
              width="48"
              height="48"
              src="https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg?1660014113"
            />
          </a>
        </div>
        <div className="DriBodyCon-header--user--details">
          <div className="title">Onboarding #Exploration</div>
          <div className="driD-flex driAlign-center actions">
            <div className="authour">
              <a href="#">Eren ツ</a>
            </div>
            <div className="driD-flex ">
              <span>•</span>
              <div>
                <a href="#">Follow</a>
              </div>
              <span>•</span>
              <div class="profile-message">
                <a href="#">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DriBodyCon-header--actions">
        <ul>
          <li className=" driPink-btn save">Save</li>
          <li className="driPink-btn driD-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              role="img"
              class="icon "
            >
              <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>
            </svg>
            Link
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
