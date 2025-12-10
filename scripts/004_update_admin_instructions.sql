-- Instructions for setting up admin access
-- After creating your account, run this command replacing with your email:

-- Step 1: Sign up on the website at /auth/sign-up
-- Step 2: After signing up, get your user_id with:
-- SELECT id, email FROM auth.users WHERE email = 'seu-email@example.com';

-- Step 3: Insert yourself as admin (replace the UUID with your user_id from step 2):
-- INSERT INTO admin_users (user_id, email) 
-- VALUES ('your-user-id-here', 'seu-email@example.com');

-- Example:
-- INSERT INTO admin_users (user_id, email) 
-- VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'admin@oikaw.com');

-- You can then access the admin dashboard at /admin
