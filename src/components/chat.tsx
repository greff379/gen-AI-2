'use client';

import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { cn } from '@/lib/utils';
import { ChatList } from '@/components/chat-list';
import { ChatPanel } from '@/components/chat-panel';
import { WelcomeScreen } from '@/components/welcome-screen';
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor';
import { ToneSelector } from './tone-selector';
import { ChatHeader } from './chat-header';
import { ChatSuggestions } from './chat-suggestions';
import { bingConversationStyleAtom } from '@/state';
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom';
import { SVG } from './ui/svg';
import StopIcon from '@/assets/images/stop.svg';
import { useBing } from '@/lib/hooks/use-bing';
import { ChatMessageModel } from '@/lib/bots/bing/types';
import { ChatNotification } from './chat-notification';
import { Settings } from './settings';
import { ChatHistory } from './chat-history';
import { PromptsManage } from './prompts';
import { AdvanceSwither } from './advance-switcher';

export type ChatProps = React.ComponentProps<'div'> & { initialMessages?: ChatMessageModel[] };

export default function Chat({ className }: ChatProps) {
  const [expand, setExpand] = useState(false)
  const [bingStyle, setBingStyle] = useAtom(bingConversationStyleAtom)
  const {
    messages,
    sendMessage,
    resetConversation,
    stopGenerating,
    setInput,
    bot,
    input,
    generating,
    isSpeaking,
    uploadImage,
    attachmentList,
    setAttachmentList,
  } = useBing()

  useEffect(() => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth'
    })
  }, [])

  const onExpaned = () => {
    setExpand(true)
  }
  )
}
