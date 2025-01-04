'use client'

import React from 'react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Project } from '@/types/project.type'
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import Link from 'next/link';

const Projects = () => {
  const projects: Project[] = [
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 2 },
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 1 },
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 3 },
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 4 },
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 5 },
    { img: 'src', demo: 'localhost', description: 'txt', title: 'txt', id: 8 },
  ]

  return (
    <div className='text-center space-y-5' id='education'>
      <h2 className='title'>Projects</h2>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              centeredSlides : true
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link href={project.demo}>
                <Card className="py-4" isBlurred shadow='lg' isPressable>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="https://nextui.org/images/hero-card-complete.jpeg"
                      width={270}
                    />
                  </CardBody>
                  <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{project.title}</h4>
                    <p className="text-tiny uppercase font-bold">{project.description}</p>
                  </CardFooter>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  )
}

export default Projects