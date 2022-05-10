import React from "react";
import useSWR from "swr";
import styles from "../styles/swr.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Swr() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <h3>Failed to load</h3>;
  if (!data) return <h3>Loading...</h3>;

  return (
    <div>
      {data ? (
        data.map((user) => {
          return (
            <div className={styles.section}>
              <p>{user.name}</p>
              <p>{user.address.suite}</p>
            </div>
          );
        })
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
