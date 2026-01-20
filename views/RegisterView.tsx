
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
  onBack: () => void;
}

const RegisterView: React.FC<Props> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 pt-12 pb-2">
        <button 
          onClick={onBack}
          className="text-white flex size-12 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">Create Account</h2>
      </div>

      <div className="px-6 flex flex-col gap-1">
        <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight pb-1 pt-6">Create Your Account</h1>
        <p className="text-neutral-400 text-base font-normal leading-normal pb-6">
          Join the premium way to travel across Ecuador. Experience comfort at every mile.
        </p>
      </div>

      <form className="flex flex-col gap-2 pb-10" onSubmit={(e) => { e.preventDefault(); onNavigate(View.HOME); }}>
        <div className="px-6 py-2">
          <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3 opacity-60">Identity Details</p>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="text-white text-sm font-medium leading-normal pb-2">ID Type</p>
              <div className="relative">
                <select className="appearance-none flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-accent-emerald/50 border border-neutral-800 bg-surface-dark h-14 px-4 text-base font-normal">
                  <option value="cedula">Cédula de Identidad</option>
                  <option value="passport">Passport</option>
                  <option value="license">Driver's License</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-4 text-neutral-400 pointer-events-none">unfold_more</span>
              </div>
            </label>
            <label className="flex flex-col w-full">
              <p className="text-white text-sm font-medium leading-normal pb-2">ID Number</p>
              <input className="flex w-full rounded-xl text-white border border-neutral-800 bg-surface-dark h-14 placeholder:text-neutral-500 p-4 text-base font-normal" placeholder="012345678-9" type="text" />
            </label>
          </div>
        </div>

        <div className="px-6 py-2">
          <p className="text-white text-sm font-semibold uppercase tracking-wider mb-3 opacity-60">Personal Information</p>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col">
              <p className="text-white text-sm font-medium leading-normal pb-2">First Name</p>
              <input className="flex w-full rounded-xl text-white border border-neutral-800 bg-surface-dark h-14 placeholder:text-neutral-500 p-4 text-base font-normal" placeholder="Juan" type="text" />
            </label>
            <label className="flex flex-col">
              <p className="text-white text-sm font-medium leading-normal pb-2">Last Name</p>
              <input className="flex w-full rounded-xl text-white border border-neutral-800 bg-surface-dark h-14 placeholder:text-neutral-500 p-4 text-base font-normal" placeholder="Pérez" type="text" />
            </label>
          </div>
        </div>

        <div className="px-6 py-2">
          <div className="flex flex-col gap-4">
            <label className="flex flex-col w-full">
              <p className="text-white text-sm font-medium leading-normal pb-2">Email Address</p>
              <input className="flex w-full rounded-xl text-white border border-neutral-800 bg-surface-dark h-14 placeholder:text-neutral-500 p-4 text-base font-normal" placeholder="juan.perez@example.ec" type="email" />
            </label>
            <label className="flex flex-col w-full">
              <p className="text-white text-sm font-medium leading-normal pb-2">Password</p>
              <div className="relative">
                <input className="flex w-full rounded-xl text-white border border-neutral-800 bg-surface-dark h-14 placeholder:text-neutral-500 p-4 text-base font-normal" placeholder="••••••••••••" type="password" />
                <span className="material-symbols-outlined absolute right-4 top-4 text-neutral-400 cursor-pointer">visibility_off</span>
              </div>
            </label>
          </div>
        </div>

        <div className="px-6 py-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input className="rounded text-accent-emerald focus:ring-accent-emerald bg-transparent border-neutral-700 size-5" type="checkbox" />
            <span className="text-sm text-neutral-400">
              I agree to the <span className="text-accent-emerald underline">Terms of Service</span> and <span className="text-accent-emerald underline">Privacy Policy</span>.
            </span>
          </label>
        </div>

        <div className="px-6 pt-4">
          <button 
            type="submit"
            className="w-full bg-accent-emerald hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-emerald/20 transition-all active:scale-[0.98]"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;
