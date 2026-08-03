'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // 로그인 로직 (실제 구현은 API 호출로 변경)
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('로그인 시도:', { email, password })
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
          <p className="text-sm text-muted-foreground">
            계정에 로그인하여 시작하세요
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 이메일 입력 필드 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-10"
              />
            </div>

            {/* 비밀번호 입력 필드 */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                비밀번호
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                className="h-10"
              />
            </div>

            {/* 로그인 버튼 */}
            <Button
              type="submit"
              className="w-full h-10 font-medium"
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인하기'}
            </Button>
          </form>

          {/* 회원가입 링크 */}
          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-muted-foreground">
              아직 계정이 없으신가요?{' '}
              <Link
                href="/signup"
                className="font-medium text-primary hover:underline transition-all"
              >
                회원가입
              </Link>
            </p>
          </div>

          {/* 비밀번호 찾기 링크 (선택사항) */}
          <div className="text-center mt-4">
            <Link
              href="/forgot-password"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
