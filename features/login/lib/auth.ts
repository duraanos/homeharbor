import { signIn, signOut } from 'next-auth/react';

const handleSignIn = (provider: string) => signIn('provider');
const handleSignOut = () => signOut();

export { handleSignIn, handleSignOut };
