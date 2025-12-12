"use client"
import { BsArrowRightCircle } from "react-icons/bs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useContext, useState } from "react"
import { getShortUrl } from "@/api/url"
import { toast } from "sonner"
import { LoadingContext } from "@/contexts/LoadingContext"
import { ImSpinner10 } from "react-icons/im"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ConvertedUrlItem } from "@/types/urlTypes"


export const RequestShortUrlForm = ({ showConversion }:
  {
    showConversion: (data: ConvertedUrlItem) => void,
  }) => {
  const [isLoading, setIsLoading] = useContext(LoadingContext)
  
  const handleRequestShortUrlFormSubmit = async (values:z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      const response = await getShortUrl(values.url)
      const data: ConvertedUrlItem = response.data;
      showConversion(data)
      form.reset()
      toast.success("Url Conversion Successful.")
    } catch (e) {
      toast.error("Url Conversion Failed!")
    } finally {
      setIsLoading(false)
    }
  }

  
  const formSchema=z.object({
    url: z.string().nonempty("URL Cannot be empty")
  })
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues:{
      url:""
    },
    resolver:zodResolver(formSchema)})

  return (

    <Form {...form}>
      <form className="flex gap-2 mt-5" onSubmit={form.handleSubmit(handleRequestShortUrlFormSubmit)}>
        <FormField
          control={form.control}
          name="url"
          render={({field}) => {
            return <FormItem>
              <FormLabel hidden>Long URL</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your Long URL"
                  className="md:w-sm"
                  {...field}
                />
              </FormControl>
              <FormDescription hidden>Enter the long url</FormDescription>
              <FormMessage />
            </FormItem>
          }}
        />
        <Button
          type="submit"
          aria-label="Convert the link"
          disabled={isLoading}
        >{isLoading ? <span className="animate-spin"><ImSpinner10 /></span> : <BsArrowRightCircle />}</Button>
      </form>
    </Form>
  )
} 
