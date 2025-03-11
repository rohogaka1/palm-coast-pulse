export default function Navbar() {
  // Add this to check environment
  const showRegister = process.env.NODE_ENV === 'development';

  return (
    // ... existing navbar code ...
    <nav>
      {/* ... other nav items ... */}
      
      {/* Only show Register link in development */}
      {showRegister && (
        <Link href="/register">
          Register
        </Link>
      )}
      
      {/* ... other nav items ... */}
    </nav>
  );
} 