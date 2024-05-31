"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "./page.module.css";

export default function Home() {
  interface Student {
    id: string;
    name: string;
    major: string;
    grade: string;
  }
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    fetch("/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setStudents(data);
      });
  }, []);
  return (
    <div>
      {students?.map((student, index) => {
        return (
          <div key={index}>
            {student.id}, {student?.name}, {student?.grade}
          </div>
        );
      })}
    </div>
  );
}
