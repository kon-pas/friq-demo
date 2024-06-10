import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/utils/cn'

// Menu
const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center bg-zinc-900 transition-all text-white rounded-full h-10 px-1 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
)
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

// List
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

// Item
const NavigationMenuItem = NavigationMenuPrimitive.Item
const navigationMenuTriggerStyle = cva(`
  group inline-flex h-8 max-w items-center justify-center my-1 text-sm px-2 font-semibold transition-colors rounded-full
  select-none cursor-pointer
  disabled:pointer-events-none disabled:opacity-50
  hover:bg-zinc-800
  focus:bg-zinc-800 focus:outline-none
`)

// Trigger
const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group px-0', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
)
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

// Content
const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        // bg-popover
        `
          origin-top-center relative
          p-3 w-full top-0
          transition-all
          data-[motion^=from-]:animate-in
          data-[motion^=to-]:animate-out
          data-[motion^=from-]:fade-in
          data-[motion^=to-]:fade-out
          data-[motion=from-end]:slide-in-from-right-52
          data-[motion=from-start]:slide-in-from-left-52
          data-[motion=to-end]:slide-out-to-right-52
          data-[motion=to-start]:slide-out-to-left-52
          md:absolute
          md:w-auto
          bg-zinc-900
          text-white
          rounded-xl
          `,
        className
      )}
      {...props}
    />
  )
)
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

// Link
const NavigationMenuLink = NavigationMenuPrimitive.Link

// Viewport
const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          // bg-popover
          `
            absolute left-0 pt-5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl text-popover-foreground shadow-sm
            bg-zinc-900 text-sm font-semibold
            mt-4
            transition-all
            data-[state=open]:animate-in
            data-[state=closed]:animate-out
            data-[state=closed]:zoom-out-95
            data-[state=open]:zoom-in-90
            md:w-[var(--radix-navigation-menu-viewport-width)]
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
)
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

// Indicator
const NavigationMenuIndicator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className="relative top-[100%] h-2 w-2 rotate-45 rounded-tl-sm shadow-sm" />
    </NavigationMenuPrimitive.Indicator>
  )
)
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

NavigationMenu.triggerStyle = navigationMenuTriggerStyle
NavigationMenu.List = NavigationMenuList
NavigationMenu.Item = NavigationMenuItem
NavigationMenu.Content = NavigationMenuContent
NavigationMenu.Trigger = NavigationMenuTrigger
NavigationMenu.Link = NavigationMenuLink
NavigationMenu.Indicator = NavigationMenuIndicator
NavigationMenu.Viewport = NavigationMenuViewport

export default NavigationMenu
