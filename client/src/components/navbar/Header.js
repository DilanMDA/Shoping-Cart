import React, { useState } from 'react';
import { Menu } from 'antd';
import
{
	AppstoreOutlined,
	SettingOutlined,
	UserOutlined,
	UserAddOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Header = () =>
{
	const [ current, setCurrent ] = useState( 'home' );

	const handleClick = ( e ) =>
	{
		// console.log(e.key);
		setCurrent( e.key );
	};

	return (
		<Menu onClick={ handleClick } selectedKeys={ [ current ] } mode="horizontal">
			<Menu.Item key="home" icon={ <AppstoreOutlined /> } className="float-start">
				Home
			</Menu.Item>

			<Menu.Item key="register" icon={ <UserAddOutlined /> } className="float-end">
				Register
			</Menu.Item>
			<Menu.Item key="login" icon={ <UserOutlined /> } className="float-end" >
				Login
			</Menu.Item>


			<SubMenu icon={ <SettingOutlined /> } title="Username">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
			</SubMenu>
		</Menu>
		
	);
};

export default Header;
