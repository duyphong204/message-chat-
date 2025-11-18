import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useAuth } from "@/hooks/use-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Logo from "@/components/logo"
import { useForm } from "react-hook-form"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { Link } from "react-router-dom"

const SignIn = () => {

  const {login, isLoggingIn} = useAuth()

  const formSchema = z.object({
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isLoggingIn) return; // tránh nhấn nhiều lần
    login(values);        // gọi API đăng ký
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted p-6">
      <div className="w-full max-w-sm">
        <Card>

          {/* Logo + tiêu đề */}
          <CardHeader className="flex flex-col items-center justify-center gap-3">
            <Logo />
            <CardTitle className="text-xl">Tạo tài khoản</CardTitle>
          </CardHeader>

          <CardContent>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">

                {/* Email field */}
                <FormField 
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="account@gmail.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )} />

                {/* Password field */}
                <FormField 
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="******" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )} />

                {/* Nút đăng ký */}
                <Button disabled={isLoggingIn} type="submit" className="w-full">
                  {isLoggingIn && <Spinner />} Đăng nhập
                </Button>

                {/* Link sang trang login */}
                <div className="text-center text-sm">
                  Chưa có tài khoản?{" "}
                  <Link to="/sign-up" className="underline">Đăng Ký</Link>
                </div>

              </form>
            </Form>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignIn