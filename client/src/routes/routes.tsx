import Chat from "@/pages/chat";
import SingleChat from "@/pages/chat/chatId";
import SignUp from "@/pages/auth/sign-up";
import SignIn from "@/pages/auth/sign-in";

export const AUTH_ROUTES = {
    SIGN_IN : "/",
    SIGN_UP : "/sign-up",
};
export const CHAT_ROUTES = {
    CHAT : "/chat",
    SINGLE_CHAT : "/chat/:chatId",
};

export const authRoutesPaths = [
    { path : AUTH_ROUTES.SIGN_IN,element : <SignIn />},
    { path: AUTH_ROUTES.SIGN_UP, element: <SignUp />},
];
export const chatRoutesPaths = [
    { path: CHAT_ROUTES.CHAT, element: <Chat />},
    { path: CHAT_ROUTES.SINGLE_CHAT, element: <SingleChat />},
];

// Kiểm tra route có phải trang Auth không
export const isAuthRoute = (pathname: string) => {
  return Object.values(AUTH_ROUTES).includes(pathname);
};  