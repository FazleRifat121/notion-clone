"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  return (
    <div>
      {user && (
        <h1>
          {user?.firstName}
          {"'s"} Space
        </h1>
      )}
      {/* BreadCrumbs  */}

      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
