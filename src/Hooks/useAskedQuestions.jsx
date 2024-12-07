// import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';

// const useAskedQuestions = () => {
//     const {user} = useContext(AuthContext);
//     console.log(user.email);
    
//     const {data: questions = [], isLoading: loading, refetch} = useQuery({
//         queryKey: ['questions', user?.email],
//         queryFn: async() => {
//             const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/questions?email=${user?.email}`);
//             // const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/questions/?:email=${user?.email}`);


//             return res.json();
//         }
//     })
//     return [questions, loading, refetch]
// };

// export default useAskedQuestions;


import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";

const useAskedQuestions = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const email = user?.email; // Get email directly from AuthContext

    if (email) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/questions/${email}`)
        .then((response) => {
          console.log("API Response:", response);

          // Ensure the response structure is handled appropriately
          if (response.data && Array.isArray(response.data.questions)) {
            setQuestions(response.data.questions); // Assuming API returns questions as an array
          } else if (response.data && response.data.question) {
            setQuestions([response.data.question]); // Handling for single question
          } else {
            console.error("Unexpected response format:", response.data);
            setQuestions([]);
          }
        })
        .catch((err) => {
          console.error("Error fetching questions:", err);
          setQuestions([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.warn("Email is missing. Unable to fetch questions.");
    }
  }, [user]); // Dependency on user to refetch when user changes

  return [questions, loading];
};

export default useAskedQuestions;
