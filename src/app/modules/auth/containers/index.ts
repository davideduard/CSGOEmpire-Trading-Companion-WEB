import { LoginContainer } from './login-container/login.container';
import { LogoutContainer } from './logout/logout.container';
import { RegisterContainer } from './register-container/register.container';

export const containers = [LoginContainer, LogoutContainer, RegisterContainer];

export * from './login-container/login.container';
export * from './logout/logout.container';
export * from './register-container/register.container';
