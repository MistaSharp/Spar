import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Your App Name</h1>
        <nav className="space-x-4">
          <a
            href="#"
            className="hover:underline"
            aria-label="Go to home page"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline"
            aria-label="View features"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:underline"
            aria-label="Contact us"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
        </div>
      </div>
    </header>
  );
}
