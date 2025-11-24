import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Drawer, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../img/logo_chase_for_business.svg";
import "./ChaseHeader.css";

const ChaseHeader = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Business");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false); // 登录弹框显示状态
  const [showPassword, setShowPassword] = useState(false); // 密码显示/隐藏
  const [rememberMe, setRememberMe] = useState(true); // 记住我

  // 登录表单数据
  const [loginForm, setLoginForm] = useState({
    username: "avestrogchase2025",
    password: "",
  });

  const categories = ["Personal", "Business", "Commercial"];

  const navItems = [
    "Checking & more",
    "Loans & financing",
    "Accept credit/debit cards",
    "Business credit cards",
    "Help & support",
    "Resource center",
  ];

  const customerServiceItems = [
    { key: "1", label: "Contact us" },
    { key: "2", label: "Help center" },
    { key: "3", label: "Find ATM & branch" },
  ];

  return (
    <div className="chase-header-container">
      <div className="chase-header-top">
        <div className="chase-header-top-inner">
          <div className="chase-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`chase-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chase-header-main">
        <div className="chase-header-main-inner">
          <div className="chase-header-left">
            <div className="chase-logo">
              <img
                src={logoImg}
                alt="Chase Logo"
                className="chase-logo-img"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          <div className="chase-header-right">
            <button
              className="chase-sign-in-btn"
              onClick={() => {
                if (isLoggedIn) {
                  setIsLoggedIn(false);
                } else {
                  setIsLoginModalVisible(true);
                }
              }}
            >
              {isLoggedIn ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      </div>

      <div className="chase-nav-bar">
        <div className="chase-nav-bar-inner">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="chase-nav-item"
              onClick={(e) => e.preventDefault()}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* 登录抽屉 */}
      <Drawer
        open={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
        placement="right"
        width={385}
        closable={false}
        // maskStyle={{ backdropFilter: "blur(4px)" }}
        bodyStyle={{ backgroundColor: "#F5F6F8" }}
        className="login-drawer"
      >
        <div className="login-modal-content">
          {/* 头部 */}
          <div className="login-modal-header">
            <CloseOutlined
              className="login-modal-close"
              onClick={() => setIsLoginModalVisible(false)}
            />
          </div>
          <h2
            style={{ marginLeft: "24px", fontWeight: "500", fontSize: "18px" }}
          >
            Manage your business accounts
          </h2>

          {/* 主要内容 */}
          <div className="login-modal-body">
            <h2 className="login-welcome">Welcome back</h2>

            {/* Username 输入 */}
            <div className="login-form-item">
              <label className="login-label">Username</label>
              <Input
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                className="login-input"
                bordered={false}
              />
              <div className="login-input-underline"></div>
            </div>

            {/* Password 输入 */}
            <div className="login-form-item">
              <label className="login-label">Password</label>
              <div className="login-password-wrapper">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="login-input"
                  bordered={false}
                />
                <a
                  href="#"
                  className="login-show-password"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
                  Show
                </a>
              </div>
              <div className="login-input-underline"></div>
            </div>

            {/* Remember me 和 Use token */}
            <div className="login-options">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="login-remember"
              >
                Remember me
              </Checkbox>
              <a href="#" className="login-use-token">
                Use token <RightOutlined />
              </a>
            </div>

            <Button
              type="primary"
              className="login-signin-button"
              block
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalVisible(false);
                navigate("/accounts");
              }}
            >
              Sign in
            </Button>

            {/* 帮助链接 */}
            <div className="login-help-links">
              <a href="#" className="login-help-link">
                Forgot username/password? <RightOutlined />
              </a>
              <a href="#" className="login-help-link">
                Not Enrolled? Sign Up Now. <RightOutlined />
              </a>
            </div>
          </div>

          {/* 底部 */}
          <div className="login-modal-footer">
            <a
              href="#"
              className="login-close-link"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginModalVisible(false);
              }}
            >
              Close
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ChaseHeader;
