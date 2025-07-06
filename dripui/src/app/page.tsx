
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react'; 
import Client from './client';
import { Suspense } from 'react';


const Page = async() => {
  const queryClient = getQueryClient(); 
  void  queryClient.prefetchQuery(trpc.hello.queryOptions({ text: 'trpc' })); 
   
 
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='font-bold'>
      <Client/>
    </div>
      </Suspense>
       
    </HydrationBoundary>
  )
}

export default Page