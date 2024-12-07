import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
            return await res.json();
        }
    })

    return [users, loading, refetch]

};

export default useUsers;