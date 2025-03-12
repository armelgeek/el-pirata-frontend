import React from 'react';
import { Button } from '@shared/components/ui/button';
export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
       <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
    </div>
    </main>
  );
}
