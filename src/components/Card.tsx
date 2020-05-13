import React from 'react';

type Props = {
  children: React.ReactNode;
  border?: boolean;
  direction?: 'column'|'row';
  spaced?: boolean;
  middle?: boolean;
  padding?: string;
};

function Card({
  children,
  middle = true,
  border = false,
  spaced = false,
  padding = '0.5rem',
  direction = 'row',
}: Props) {
  return (
    <div
      style={{
        padding: padding,
        marginTop: '0.3rem',
        borderRadius: '4px',
        marginBottom: '0.3rem',
        backgroundColor: 'white',
        flexDirection: direction,
        alignItems: middle ? 'center' : 'flex-start',
        borderLeft: border ? '3px solid #56b586' : 'none',
        justifyContent: spaced ? 'space-between' : 'start',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
