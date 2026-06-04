import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  ChevronRight,
  Check,
  Mail,
} from 'lucide-react'
import { motionVariants } from '@/lib/motion'

const sidebarSections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'privacy', label: 'Privacy & Security', icon: Shield },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'language', label: 'Language & Region', icon: Globe },
]

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

function SettingRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export default function SettingsDemo() {
  const [activeSection, setActiveSection] = useState('profile')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [name, setName] = useState('Sofia Davis')
  const [email, setEmail] = useState('sofia@example.com')
  const [saved, setSaved] = useState(false)

  const [notifs, setNotifs] = useState({
    emailUpdates: true,
    pushNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    soundEffects: true,
  })

  const [appearance, setAppearance] = useState({
    darkMode: false,
    reducedMotion: false,
    compactMode: false,
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-950 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">Settings</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onThemeChange={setTheme} />
            <a href="/" className="text-sm text-blue-500 hover:text-blue-600">← Back</a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-56 shrink-0">
          <nav className="space-y-1">
            {sidebarSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
                {activeSection === section.id && <ChevronRight className="w-3 h-3 ml-auto" />}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 space-y-6">
          {activeSection === 'profile' && (
            <motion.div variants={motionVariants.fadeInUp} initial="hidden" animate="visible" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                      {name.charAt(0)}
                    </div>
                    <Button variant="outline" size="sm">Change photo</Button>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Full name
                      </label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        leftIcon={<User className="w-4 h-4" />}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        leftIcon={<Mail className="w-4 h-4" />}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button variant="primary" onClick={handleSave} loading={saved}>
                      {saved ? <><Check className="w-4 h-4 mr-1" /> Saved</> : 'Save changes'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === 'notifications' && (
            <motion.div variants={motionVariants.fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Choose how you receive updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <SettingRow label="Email updates" description="Receive product updates by email">
                    <Toggle checked={notifs.emailUpdates} onChange={(v) => setNotifs({ ...notifs, emailUpdates: v })} />
                  </SettingRow>
                  <SettingRow label="Push notifications" description="Browser and mobile push alerts">
                    <Toggle checked={notifs.pushNotifications} onChange={(v) => setNotifs({ ...notifs, pushNotifications: v })} />
                  </SettingRow>
                  <SettingRow label="Marketing emails" description="Tips, new features, and offers">
                    <Toggle checked={notifs.marketingEmails} onChange={(v) => setNotifs({ ...notifs, marketingEmails: v })} />
                  </SettingRow>
                  <SettingRow label="Security alerts" description="Login attempts and account changes">
                    <Toggle checked={notifs.securityAlerts} onChange={(v) => setNotifs({ ...notifs, securityAlerts: v })} />
                  </SettingRow>
                  <SettingRow label="Sound effects">
                    <Toggle checked={notifs.soundEffects} onChange={(v) => setNotifs({ ...notifs, soundEffects: v })} />
                  </SettingRow>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeSection === 'appearance' && (
            <motion.div variants={motionVariants.fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize how U9GO looks</CardDescription>
                </CardHeader>
                <CardContent>
                  <SettingRow label="Dark mode" description="Use the dark theme across the app">
                    <Toggle checked={appearance.darkMode} onChange={(v) => setAppearance({ ...appearance, darkMode: v })} />
                  </SettingRow>
                  <SettingRow label="Reduced motion" description="Minimize animation for accessibility">
                    <Toggle checked={appearance.reducedMotion} onChange={(v) => setAppearance({ ...appearance, reducedMotion: v })} />
                  </SettingRow>
                  <SettingRow label="Compact mode" description="Tighter spacing and smaller controls">
                    <Toggle checked={appearance.compactMode} onChange={(v) => setAppearance({ ...appearance, compactMode: v })} />
                  </SettingRow>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {!['profile', 'notifications', 'appearance'].includes(activeSection) && (
            <motion.div variants={motionVariants.fadeInUp} initial="hidden" animate="visible">
              <Card>
                <CardContent className="pt-8 pb-8 text-center text-gray-400 dark:text-gray-600">
                  <p className="text-sm">This section is coming in a future update.</p>
                  <p className="text-xs mt-1">See <a href="/roadmap" className="text-blue-400 hover:underline">ROADMAP.md</a> for details.</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}
