import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, Button, Space, Input, Drawer, Checkbox } from 'antd'
import {
  MenuOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  CloseOutlined,
  RightOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import logoImg from '../img/logo.png'
import checkingImg from '../img/e2.png'
import savingsImg from '../img/e3.png'
import justForYouImg from '../img/e1.png'
import secureMessagesImg from '../img/e5.png'

import './AppHeader.css'

const { Header } = Layout
const { Search } = Input

const AppHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [current, setCurrent] = useState('accounts')
  const [subMenuCurrent, setSubMenuCurrent] = useState('overview')
  const [indicatorPosition, setIndicatorPosition] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 登录状态
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false) // 登录弹框显示状态
  const [showPassword, setShowPassword] = useState(false) // 密码显示/隐藏
  const [rememberMe, setRememberMe] = useState(true) // 记住我
  const [isMenuDrawerVisible, setIsMenuDrawerVisible] = useState(false) // 菜单抽屉显示状态
  const menuRef = useRef(null)
  const indicatorRef = useRef(null)
  
  // 登录表单数据
  const [loginForm, setLoginForm] = useState({
    username: 'avestrogchase2025',
    password: '',
  })

  // 根据路由同步更新当前选中的菜单项
  useEffect(() => {
    const path = location.pathname
    if (path === '/accounts' || path.startsWith('/accounts/')) {
      setCurrent('accounts')
    } else if (path === '/pay-transfer') {
      setCurrent('pay-transfer')
      setSubMenuCurrent('pay')
    } else if (path === '/security' || path === '/two-factor-authentication') {
      setCurrent('security')
      if (path === '/two-factor-authentication') {
        setSubMenuCurrent('overview')
      }
    } else if (path === '/statements') {
      setCurrent('pay-transfer')
      setSubMenuCurrent('activity')
    } else if (path === '/customer-insights') {
      setCurrent('accounts')
      setSubMenuCurrent('customer-insights')
    }
  }, [location.pathname])

  // 定义每个主菜单项对应的二级菜单
  const subMenuItems = {
    accounts: [
      { key: 'overview', label: 'Overview' },
      { key: 'customer-insights', label: 'Customer Insights' },
      { key: 'statements', label: 'Statements & documents' },
      { key: 'profile', label: 'Profile & settings' },
    ],
    'pay-transfer': [
      { key: 'Payment center', label: 'Payment center' },
      { key: 'pay', label: 'Pay' },
      { key: 'transfer', label: 'Transferr' },
      { key: 'activity', label: 'Activity' },
      { key: 'recipients', label: 'Recipients',options:[] },
    ],
    'collect-deposit': [],
    'tools-insights': [],
    'account-management': [],
    security: [
      { key: 'overview', label: 'overview' },
    ],
  }

  const menuItems = [
    {
      key: 'accounts',
      label: 'Accounts',
    },
    {
      key: 'pay-transfer',
      label: 'Pay & transfer',
    },
    {
      key: 'collect-deposit',
      label: 'Collect & deposit',
    },
    {
      key: 'tools-insights',
      label: 'Tools & insights',
    },
    {
      key: 'account-management',
      label: 'Account management',
    },
    {
      key: 'security',
      label: 'Security',
    },
  ]

  // 计算三角形指示器位置
  useEffect(() => {
    const calculatePosition = () => {
      if (menuRef.current && indicatorRef.current) {
        // 从容器中查找菜单项
        const menuItems = menuRef.current.querySelectorAll('.ant-menu-item')
        const activeItem = Array.from(menuItems).find((item) =>
          item.classList.contains('ant-menu-item-selected')
        )
        if (activeItem) {
          const wrapper = indicatorRef.current.parentElement
          if (wrapper) {
            const wrapperRect = wrapper.getBoundingClientRect()
            
            // 获取菜单项内文字元素的位置（更精确）
            const textElement = activeItem.querySelector('.ant-menu-title-content') || activeItem
            const textRect = textElement.getBoundingClientRect()
            
            // 计算文字中心相对于页面的绝对位置
            const textCenterAbsolute = textRect.left + textRect.width / 2
            
            // 计算相对于wrapper的位置
            const positionRelativeToWrapper = textCenterAbsolute - wrapperRect.left
            
            setIndicatorPosition(positionRelativeToWrapper)
          }
        }
      }
    }
    
    // 延迟执行以确保DOM已渲染
    const timer = setTimeout(() => {
      calculatePosition()
    }, 100)
    
    // 监听窗口大小变化和菜单渲染完成
    window.addEventListener('resize', calculatePosition)
    
    // 使用 MutationObserver 监听菜单项变化
    let observer = null
    if (menuRef.current) {
      observer = new MutationObserver(() => {
        calculatePosition()
      })
      observer.observe(menuRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      })
    }
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculatePosition)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [current])

  const onClick = (e) => {
    setCurrent(e.key)
    // 重置二级菜单选中项
    if (e.key === 'pay-transfer') {
      // Pay & transfer 默认选中 'pay'
      setSubMenuCurrent('pay')
    } else if (subMenuItems[e.key] && subMenuItems[e.key].length > 0) {
      // 其他菜单默认选中第一个
      setSubMenuCurrent(subMenuItems[e.key][0].key)
    }
    if (e.key === 'accounts') {
      navigate('/accounts')
    } else if (e.key === 'pay-transfer') {
      navigate('/pay-transfer')
    } else if (e.key === 'security') {
      navigate('/security')
    }
  }

  const onSubMenuClick = (key) => {
    setSubMenuCurrent(key)
   if (key === 'customer-insights') {
      navigate('/customer-insights')
    } else if (key === 'two-factor') {
      navigate('/two-factor-authentication')
    } else if (key === 'activity') {    
      navigate('/statements')
    }
  }

  // 菜单抽屉菜单项数据
  const drawerMenuItems = [
    { key: 'accounts', label: 'Accounts', route: '/accounts' },
    { key: 'overview', label: 'Overview', route: null },
    { key: 'customer-insights', label: 'Customer Insights', route: null },
    { key: 'pay-transfer', label: 'Pay & transfer', route: '/pay-transfer' },
    { key: 'collect-deposit', label: 'Collect & deposit', route: null },
    { key: 'tools-insights', label: 'Tools & insights', route: null },
    { key: 'account-management', label: 'Account management', route: null },
    { key: 'profile', label: 'Profile & settings', route: null },
    { key: 'security', label: 'Security', route: '/security' },
    { key: 'statements', label: 'Statements & documents', route: null },
  ]

  const connectWithChaseItems = [
    { key: 'help-support', label: 'Help & support', route: null },
    { key: 'find-atm', label: 'Find ATM & branch', route: null },
    { key: 'schedule-meeting', label: 'Schedule a meeting', route: null },
    { key: 'secure-messages', label: 'Secure messages', route: '/security', hasIcon: true, icon: secureMessagesImg },
    { key: 'give-feedback', label: 'Give feedback', route: null },
  ]

  const exploreProductsItems = [
    { key: 'just-for-you', label: 'Just for you', route: null, hasIcon: true, icon: justForYouImg },
    { key: 'checking', label: 'Checking', route: null, hasIcon: true, icon: checkingImg },
    { key: 'savings', label: 'Savings', route: null, hasIcon: true, icon: savingsImg },
  ]

  const handleDrawerMenuClick = (item) => {
    if (item.route) {
      navigate(item.route)
      if (item.key === 'accounts') {
        setCurrent('accounts')
      } else if (item.key === 'security' || item.key === 'secure-messages') {
        setCurrent('security')
      } else if (item.key === 'pay-transfer') {
        setCurrent('pay-transfer')
        setSubMenuCurrent('pay') // Pay & transfer 默认选中 'pay'
      } else if (item.key === 'customer-insights') {
        setSubMenuCurrent('customer-insights')
      } else if (item.key === 'statements') {
        setSubMenuCurrent('statements')
      }
      setIsMenuDrawerVisible(false)
    }
  }

  return (
    <div className="app-header-container">
      {/* 顶部栏 */}
      <div className="header-top">
        <div className="header-top-inner">
        <div className="header-left">
          <MenuOutlined 
            className="menu-icon" 
            onClick={() => setIsMenuDrawerVisible(true)}
          />
            <img 
              src={logoImg} 
              alt="Chase Logo" 
              className="logo"
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
        </div>
        <div className="header-right">
          <Space size="middle">
            <SearchOutlined className="header-icon" />
            <QuestionCircleOutlined className="header-icon" />
            <UserOutlined className="header-icon" />
            <Button type="primary" className="open-account-btn">
              Open an account
            </Button>
              <a 
                href="#" 
                className="sign-out-link"
                onClick={(e) => {
                  e.preventDefault()
                  if (isLoggedIn) {
                    // 登出
                    setIsLoggedIn(false)
                  } else {
                    // 显示登录弹框
                    setIsLoginModalVisible(true)
                  }
                }}
              >
                {isLoggedIn ? 'Sign out' : 'Sign in'}
            </a>
          </Space>
          </div>
        </div>
      </div>

      {/* 导航菜单 */}
      <div className="header-nav">
        <div className="header-nav-inner" ref={menuRef}>
        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          onClick={onClick}
          items={menuItems}
          className="nav-menu"
        />
      </div>
      </div>

      {/* 二级菜单 - 气泡菜单 */}
      {subMenuItems[current] && subMenuItems[current].length > 0 && location.pathname !== '/accounts/detail' && (
        <div className="sub-menu-container">
          <div className="sub-menu-wrapper">
            <div className="sub-menu">
              {subMenuItems[current].map((item) => (
                <div
                  key={item.key}
                  className={`sub-menu-item ${
                    subMenuCurrent === item.key ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSubMenuClick(item.key)
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
            {/* 向下指向的白色三角形指示器 */}
            <div
              ref={indicatorRef}
              className="sub-menu-indicator"
              style={{ left: `${indicatorPosition}px` }}
            ></div>
          </div>
        </div>
      )}

      {/* 登录抽屉 */}
      <Drawer
        open={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
        placement="right"
        width={400}
        closable={false}
        maskStyle={{ backdropFilter: 'blur(4px)' }}
        bodyStyle={{ backgroundColor: '#F5F6F8' }}
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
          <h2 style={{ marginLeft: '24px' ,fontWeight: '500', fontSize: '18px'}}>Manage your business accounts</h2>

          {/* 主要内容 */}
          <div className="login-modal-body">
            <h2 className="login-welcome">Welcome back</h2>

            {/* Username 输入 */}
            <div className="login-form-item">
              <label className="login-label">Username</label>
              <Input
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
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
                  type={showPassword ? 'text' : 'password'}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="login-input"
                  bordered={false}
                />
                <a 
                  href="#" 
                  className="login-show-password"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowPassword(!showPassword)
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

            {/* Sign in 按钮 */}
            <Button 
              type="primary" 
              className="login-signin-button"
              block
              onClick={() => {
                setIsLoggedIn(true)
                setIsLoginModalVisible(false)
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
                e.preventDefault()
                setIsLoginModalVisible(false)
              }}
            >
              Close
            </a>
          </div>
        </div>
      </Drawer>

      {/* 菜单抽屉 */}
      <Drawer
        open={isMenuDrawerVisible}
        onClose={() => setIsMenuDrawerVisible(false)}
        placement="left"
        width={300}
        closable={false}
        className="menu-drawer"
      >
        <div className="menu-drawer-content">
          {/* 顶部标题和关闭按钮 */}
          <div className="menu-drawer-header">
            <CloseOutlined 
              className="menu-drawer-close" 
              onClick={() => setIsMenuDrawerVisible(false)}
            />
          </div>

          {/* 主菜单项 */}
          <div className="menu-drawer-main">
            {drawerMenuItems.map((item) => {
              // 根据当前路由判断是否 active，只匹配有路由的项
              const isActive = item.route ? location.pathname === item.route : false
              return (
                <div
                  key={item.key}
                  className={`menu-drawer-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleDrawerMenuClick(item)}
                >
                  {item.label}
                </div>
              )
            })}
            
            <div className="menu-drawer-section-title">CONNECT WITH CHASE</div>
            {connectWithChaseItems.map((item) => {
              const isActive = item.route ? location.pathname === item.route : false
              return (
                <div
                  key={item.key}
                  className={`menu-drawer-item ${item.hasIcon ? 'menu-drawer-item-with-icon' : ''} ${isActive ? 'active' : ''}`}
                  onClick={() => handleDrawerMenuClick(item)}
                >
                  {item.hasIcon && item.key === 'secure-messages' ? (
                    <>
                      {item.label}
                      <img 
                        src={item.icon} 
                        alt={item.label} 
                        className="menu-drawer-item-icon menu-drawer-item-icon-secure-messages" 
                      />
                    </>
                  ) : (
                    item.label
                  )}
                </div>
              )
            })}
            
            <div className="menu-drawer-section-title">EXPLORE PRODUCTS</div>
            {exploreProductsItems.map((item) => {
              const isActive = false // 可以根据需要设置
              return (
                <div
                  key={item.key}
                  className={`menu-drawer-item menu-drawer-item-with-icon ${isActive ? 'active' : ''}`}
                  onClick={() => handleDrawerMenuClick(item)}
                >
                  {item.hasIcon && (
                    <img src={item.icon} alt={item.label} className="menu-drawer-item-icon" />
                  )}
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default AppHeader

