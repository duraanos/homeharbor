'use client';

import { TUser } from '../types/user';
import { useSession } from 'next-auth/react';
import { handleSignIn, handleSignOut } from '../lib/auth';

export default function Login() {
  const { data: session } = useSession();

  const user: TUser | undefined = session?.user;
  return (
    <>
      {user ? (
        <div>
          <div className="text-center text-5xl text-orange-400 font-bold mt-5">
            {user.name}
          </div>
          <div className="flex align-center justify-center mt-5 ">
            <img
              className="w-64 rounded-full"
              src={user.image ? user.image : undefined}
            />
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-orange-400 w-2/6 h-10 rounded-lg text-white font-bold"
              onClick={() => handleSignOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <button
            className="bg-orange-400 w-2/6 h-10 rounded-lg text-white font-bold"
            onClick={() => handleSignIn('google')}
          >
            Sign in
          </button>
        </div>
      )}
    </>
  );
}
