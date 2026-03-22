import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, SplitSquareHorizontal, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Home() {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto py-12">
      
      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium mb-4">
          <ShieldCheck className="w-4 h-4" />
          100% Secure & Private
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          PDF tools that respect your <span className="text-primary">privacy.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Merge and split your PDF files directly in your browser. No backend, no uploads, zero risk of your data leaking.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        
        {/* Merge Card */}
        <Link to="/merge" className="group block p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all text-left">
          <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Merge PDF</h2>
          <p className="text-slate-600 mb-6">
            Combine multiple PDFs into a single document in seconds. Keep your pages organized.
          </p>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
            Open Merge Tool
          </Button>
        </Link>

        {/* Split Card */}
        <Link to="/split" className="group block p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all text-left">
          <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <SplitSquareHorizontal className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Split PDF</h2>
          <p className="text-slate-600 mb-6">
            Extract pages from your PDF or split a large document into multiple smaller files.
          </p>
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
            Open Split Tool
          </Button>
        </Link>

      </div>

      {/* Feature Highlights */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-slate-600">
        <div className="flex flex-col items-center gap-2">
          <Zap className="w-6 h-6 text-slate-400" />
          <span className="font-medium text-slate-900">Lightning Fast</span>
          <span className="text-sm">Processes using your device's memory.</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-slate-400" />
          <span className="font-medium text-slate-900">Zero Uploads</span>
          <span className="text-sm">Files never touch a server.</span>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
          <Layers className="w-6 h-6 text-slate-400" />
          <span className="font-medium text-slate-900">No Watermarks</span>
          <span className="text-sm">Free tools shouldn't ruin your files.</span>
        </div>
      </div>

    </div>
  );
}