"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-5 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      AWS Cloud Practitioner &amp; Solutions Architect
    </p>
    <p className="font-normal text-base my-3 max-w-lg text-neutral-200">
      Hands-on training for the world&apos;s leading cloud platform — from foundational concepts
      to designing highly available, fault-tolerant architectures on AWS.
    </p>
    <p className="text-sm text-orange-300 font-semibold">AWS Authorized · Instructor-Led</p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Linux &amp; Open-Source DevOps
    </p>
    <p className="font-normal text-base my-3 max-w-lg text-neutral-200">
      Master Linux system administration, shell scripting, Docker, Terraform, and the
      open-source DevOps tools used in real production environments.
    </p>
    <p className="text-sm text-blue-300 font-semibold">Linux Foundation Aligned · Hands-On Labs</p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Machine Learning &amp; AI on AWS
    </p>
    <p className="font-normal text-base my-3 max-w-lg text-neutral-200">
      From data science fundamentals to deploying production ML models — covering SageMaker,
      deep learning frameworks, and MLOps pipelines on cloud infrastructure.
    </p>
    <p className="text-sm text-emerald-300 font-semibold">AWS ML Specialty Level · Practical Projects</p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-3xl text-xl text-white">
      Kubernetes &amp; Cloud Native
    </p>
    <p className="font-normal text-base my-3 max-w-lg text-neutral-200">
      Container orchestration with Kubernetes, microservices architecture, Helm, and cloud-native
      patterns aligned with KCNA and KCSA certification paths.
    </p>
    <p className="text-sm text-violet-300 font-semibold">Linux Foundation KCNA · Certification Track</p>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "images/training_one.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "images/training_two.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "images/training_four.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "images/training_three.jpg",
  },
];
