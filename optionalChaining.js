let user = { profile: { name: "Shehin" } };

// Safe way to access nested properties
console.log(user?.profile?.name); // "Shehin"

// If 'address' or 'city' is missing, no error!
console.log(user?.address?.city); // ✅ undefined
