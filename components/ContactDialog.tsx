'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ShadCN/Dialog';
import { Button } from '@/components/ShadCN/Button';
import { Input } from '@/components/ShadCN/Input';
import { Textarea } from '@/components/ShadCN/Textarea';
import { Label } from '@/components/ShadCN/Label';
import { IconBrandTelegram } from '@tabler/icons-react';

export default function ContactDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState('');

  // ENV Webhook
  const webhookUrl = process.env.NEXT_PUBLIC_TELEGRAM_WEBHOOK_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      if (!webhookUrl) {
        setStatus('Webhook URL is not configured.');
        return;
      }
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setStatus('Pesan berhasil dikirim!');
        setName('');
        setMessage('');
        setOpen(false);
      } else {
        setStatus('Gagal mengirim pesan.');
      }
    } catch (err) {
      setStatus('Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-full w-full max-w-xl px-6 py-3 text-white shadow hover:shadow-lg transition items-center">
          <IconBrandTelegram className="size-5" />
          Telegram
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Direct Message</DialogTitle>
          <DialogDescription>
            Send a direct message to my Telegram via this form.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex flex-col gap-2'>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full text-white"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
          {status && <p className="text-sm text-center text-muted-foreground">{status}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
