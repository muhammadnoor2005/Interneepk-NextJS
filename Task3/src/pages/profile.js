import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error){
    return <div>{error.message}</div>
  };

  return (
    user && (
      <div className='profileDiv'>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        
      </div>
    )
  );
}

// protected route
export const getServerSideProps = withPageAuthRequired();