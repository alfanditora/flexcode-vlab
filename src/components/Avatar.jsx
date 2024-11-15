const getInitials = (email) => {
    const name = email.split("@")[0];
    return name.substring(0, 1).toUpperCase();
  };
  
  const Avatar = ({ email, size = "md" }) => {
    const initials = getInitials(email);
    const sizeClasses = {
      sm: "w-8 h-8 text-sm",
      md: "w-12 h-12 text-lg",
      lg: "w-20 h-20 text-4xl",
    };
  
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold`}
      >
        {initials}
      </div>
    );
  };

export default Avatar;