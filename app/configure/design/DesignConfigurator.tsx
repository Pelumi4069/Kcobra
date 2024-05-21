// 'use client'


// import HandleComponent from '@/components/HandleComponent'
import { AspectRatio } from '@/components/ui/aspect-ratio';
// import { ScrollArea } from '@/components/ui/scroll-area'
// import { cn, formatPrice } from '@/lib/utils'
import NextImage from 'next/image';
// import { Rnd } from 'react-rnd'
// import { RadioGroup } from '@headlessui/react'
// import { useRef, useState } from 'react'
// import {
//   COLORS,
//   FINISHES,
//   MATERIALS,
//   MODELS,
// } from '@/validators/option-validator'
// import { Label } from '@/components/ui/label'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Button } from '@/components/ui/button'
// import { ArrowRight, Check, ChevronsUpDown } from 'lucide-react'
// import { BASE_PRICE } from '@/config/products'
// import { useUploadThing } from '@/lib/uploadthing'
// import { useToast } from '@/components/ui/use-toast'
// import { useMutation } from '@tanstack/react-query'
// import { saveConfig as _saveConfig, SaveConfigArgs } from './actions'
// import { useRouter } from 'next/navigation'




interface DesignConfiguratorProps {
    configId: string
    imageUrl: string
    imageDimensions: { width: number; height: number }
  }


const DesignConfigurator = ({
    configId, 
    imageUrl,
    imageDimensions} : DesignConfiguratorProps) => {
  return (
    <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
    <div
    //   ref={containerRef}
      className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
            <AspectRatio 
            ratio={896 / 1831} 
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full">
                <NextImage 
                alt='phone image' 
                src="/phone-template.png" 
                className='pointer-events-none z-50 select-none'/>
            </AspectRatio>
        </div>
        </div>
        
    </div>
  )
}

export default DesignConfigurator;