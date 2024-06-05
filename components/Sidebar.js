import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
      <h2>Barra Lateral</h2>
      <ul>
        <li><Link href="/">Página Principal</Link></li>
        <li><Link href="/notificacoes">Notificações</Link></li>
        <li><Link href="/perfil">Perfil</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;