var bicia = {
    h: {
        A1: 'B1_C1_D1_E1_F1_G1_H1_A2_A3_A4_A5_A6_A7_A8_B2_C3_D4_E5_F6_G7_H8',
        A2: 'B2_C2_D2_E2_F2_G2_H2_A1_A3_A4_A5_A6_A7_A8_B1_B3_C4_D5_E6_F7_G8',
        A3: 'B3_C3_D3_E3_F3_G3_H3_A1_A2_A4_A5_A6_A7_A8_C1_B2_B4_C5_D6_E7_F8',
        A4: 'B4_C4_D4_E4_F4_G4_H4_A1_A2_A3_A5_A6_A7_A8_B3_C2_D1_B5_C6_D7_E8',
        A5: 'B5_C5_D5_E5_F5_G5_H5_A1_A2_A3_A4_A6_A7_A8_B4_C3_D2_E1_B6_C7_D8',
        A6: 'B6_C6_D6_E6_F6_G6_H6_A1_A2_A3_A4_A5_A7_A8_B5_C4_D3_E2_F1_B7_C8',
        A7: 'B7_C7_D7_E7_F7_G7_H7_A1_A2_A3_A4_A5_A6_A8_B6_C5_D4_E3_F2_G1_B8',
        A8: 'B8_C8_D8_E8_F8_G8_H8_A1_A2_A3_A4_A5_A6_A7_B7_C6_D5_E4_F3_G2_H1',
        B1: 'A1_C1_D1_E1_F1_G1_H1_B2_B3_B4_B5_B6_B7_B8_A2_C2_D3_E4_F5_G6_H7',
        B2: 'A2_C2_D2_E2_F2_G2_H2_B1_B3_B4_B5_B6_B7_B8_A1_A3_C1_C3_D4_E5_F6_G7_H8',
        B3: 'A3_C3_D3_E3_F3_G3_H3_B1_B2_B4_B5_B6_B7_B8_A2_A4_C2_C4_D1_D5_E6_F7_G8',
        B4: 'A4_C4_D4_E4_F4_G4_H4_B1_B2_B3_B5_B6_B7_B8_A3_A5_C3_D2_E1_C5_D6_E7_F8',
        B5: 'A5_C5_D5_E5_F5_G5_H5_B1_B2_B3_B4_B6_B7_B8_A4_A6_C4_D3_E2_F1_C6_D7_E8',
        B6: 'A6_C6_D6_E6_F6_G6_H6_B1_B2_B3_B4_B5_B7_B8_A5_A7_C5_D4_E3_F2_G1_C7_D8',
        B7: 'A7_C7_D7_E7_F7_G7_H7_B1_B2_B3_B4_B5_B6_B8_A6_A8_C6_D5_E4_F3_G2_H1_C8',
        B8: 'A8_C8_D8_E8_F8_G8_H8_B1_B2_B3_B4_B5_B6_B7_A7_C7_D6_E5_F4_G3_H2',
        C1: 'A1_B1_D1_E1_F1_G1_H1_C2_C3_C4_C5_C6_C7_C8_A3_B2_D2_E3_F4_G5_H6',
        C2: 'A2_B2_D2_E2_F2_G2_H2_C1_C3_C4_C5_C6_C7_C8_A4_B1_B3_D1_D3_E4_F5_G6_H7',
        C3: 'A3_B3_D3_E3_F3_G3_H3_C1_C2_C4_C5_C6_C7_C8_A1_A5_B2_B4_D2_D4_E1_E5_F6_G7_H8',
        C4: 'A4_B4_D4_E4_F4_G4_H4_C1_C2_C3_C5_C6_C7_C8_A2_A6_B3_B5_D3_D5_E2_E6_F1_F7_G8',
        C5: 'A5_B5_D5_E5_F5_G5_H5_C1_C2_C3_C4_C6_C7_C8_A3_A7_B4_B6_D4_D6_E3_E7_F2_F8_G1',
        C6: 'A6_B6_D6_E6_F6_G6_H6_C1_C2_C3_C4_C5_C7_C8_A4_A8_B5_B7_D5_D7_E4_E8_F3_G2_H1',
        C7: 'A7_B7_D7_E7_F7_G7_H7_C1_C2_C3_C4_C5_C6_C8_A5_B6_B8_D6_D8_E5_F4_G3_H2',
        C8: 'A8_B8_D8_E8_F8_G8_H8_C1_C2_C3_C4_C5_C6_C7_A6_B7_D7_E6_F5_G4_H3',
        D1: 'A1_B1_C1_E1_F1_G1_H1_D2_D3_D4_D5_D6_D7_D8_A4_B3_C2_E2_F3_G4_H5',
        D2: 'A2_B2_C2_E2_F2_G2_H2_D1_D3_D4_D5_D6_D7_D8_A5_B4_C1_C3_E1_E3_F4_G5_H6',
        D3: 'A3_B3_C3_E3_F3_G3_H3_D1_D2_D4_D5_D6_D7_D8_A6_B1_B5_C2_C4_E2_E4_F1_F5_G6_H7',
        D4: 'A4_B4_C4_E4_F4_G4_H4_D1_D2_D3_D5_D6_D7_D8_A1_A7_B2_B6_C3_C5_E3_E5_F2_F6_G1_G7_H8',
        D5: 'A5_B5_C5_E5_F5_G5_H5_D1_D2_D3_D4_D6_D7_D8_A2_A8_B3_B7_C4_C6_E4_E6_F3_F7_G2_G8_H1',
        D6: 'A6_B6_C6_E6_F6_G6_H6_D1_D2_D3_D4_D5_D7_D8_A3_B4_B8_C5_C7_E5_E7_F4_F8_G3_H2',
        D7: 'A7_B7_C7_E7_F7_G7_H7_D1_D2_D3_D4_D5_D6_D8_A4_B5_C6_C8_E6_E8_F5_G4_H3',
        D8: 'A8_B8_C8_E8_F8_G8_H8_D1_D2_D3_D4_D5_D6_D7_A5_B6_C7_E7_F6_G5_H4',
        E1: 'A1_B1_C1_D1_F1_G1_H1_E2_E3_E4_E5_E6_E7_E8_A5_B4_C3_D2_F2_G3_H4',
        E2: 'A2_B2_C2_D2_F2_G2_H2_E1_E3_E4_E5_E6_E7_E8_A6_B5_C4_D1_D3_F1_F3_G4_H5',
        E3: 'A3_B3_C3_D3_F3_G3_H3_E1_E2_E4_E5_E6_E7_E8_A7_B6_C1_C5_D2_D4_F2_F4_G1_G5_H6',
        E4: 'A4_B4_C4_D4_F4_G4_H4_E1_E2_E3_E5_E6_E7_E8_A8_B1_B7_C2_C6_D3_D5_F3_F5_G2_G6_H1_H7',
        E5: 'A5_B5_C5_D5_F5_G5_H5_E1_E2_E3_E4_E6_E7_E8_A1_B2_B8_C3_C7_D4_D6_F4_F6_G3_G7_H2_H8',
        E6: 'A6_B6_C6_D6_F6_G6_H6_E1_E2_E3_E4_E5_E7_E8_A2_B3_C4_C8_D5_D7_F5_F7_G4_G8_H3',
        E7: 'A7_B7_C7_D7_F7_G7_H7_E1_E2_E3_E4_E5_E6_E8_A3_B4_C5_D6_D8_F6_F8_G5_H4',
        E8: 'A8_B8_C8_D8_F8_G8_H8_E1_E2_E3_E4_E5_E6_E7_A4_B5_C6_D7_F7_G6_H5',
        F1: 'A1_B1_C1_D1_E1_G1_H1_F2_F3_F4_F5_F6_F7_F8_A6_B5_C4_D3_E2_G2_H3',
        F2: 'A2_B2_C2_D2_E2_G2_H2_F1_F3_F4_F5_F6_F7_F8_A7_B6_C5_D4_E1_E3_G1_G3_H4',
        F3: 'A3_B3_C3_D3_E3_G3_H3_F1_F2_F4_F5_F6_F7_F8_A8_B7_C6_D1_D5_E2_E4_G2_G4_H1_H5',
        F4: 'A4_B4_C4_D4_E4_G4_H4_F1_F2_F3_F5_F6_F7_F8_B8_C1_C7_D2_D6_E3_E5_G3_G5_H2_H6',
        F5: 'A5_B5_C5_D5_E5_G5_H5_F1_F2_F3_F4_F6_F7_F8_B1_C2_C8_D3_D7_E4_E6_G4_G6_H3_H7',
        F6: 'A6_B6_C6_D6_E6_G6_H6_F1_F2_F3_F4_F5_F7_F8_A1_B2_C3_D4_D8_E5_E7_G5_G7_H4_H8',
        F7: 'A7_B7_C7_D7_E7_G7_H7_F1_F2_F3_F4_F5_F6_F8_A2_B3_C4_D5_E6_E8_G6_G8_H5',
        F8: 'A8_B8_C8_D8_E8_G8_H8_F1_F2_F3_F4_F5_F6_F7_A3_B4_C5_D6_E7_G7_H6',
        G1: 'A1_B1_C1_D1_E1_F1_H1_G2_G3_G4_G5_G6_G7_G8_A7_B6_C5_D4_E3_F2_H2',
        G2: 'A2_B2_C2_D2_E2_F2_H2_G1_G3_G4_G5_G6_G7_G8_A8_B7_C6_D5_E4_F3_F1_H1_H3',
        G3: 'A3_B3_C3_D3_E3_F3_H3_G1_G2_G4_G5_G6_G7_G8_B8_C7_D6_E1_E5_F2_F4_H2_H4',
        G4: 'A4_B4_C4_D4_E4_F4_H4_G1_G2_G3_G5_G6_G7_G8_C8_D1_D7_E2_E6_F3_F5_H3_H5',
        G5: 'A5_B5_C5_D5_E5_F5_H5_G1_G2_G3_G4_G6_G7_G8_C1_D2_D8_E3_E7_F4_F6_H4_H6',
        G6: 'A6_B6_C6_D6_E6_F6_H6_G1_G2_G3_G4_G5_G7_G8_B1_C2_D3_E4_E8_F5_F7_H5_H7',
        G7: 'A7_B7_C7_D7_E7_F7_H7_G1_G2_G3_G4_G5_G6_G8_A1_B2_C3_D4_E5_F6_F8_H6_H8',
        G8: 'A8_B8_C8_D8_E8_F8_H8_G1_G2_G3_G4_G5_G6_G7_A2_B3_C4_D5_E6_F7_H7',
        H1: 'A1_B1_C1_D1_E1_F1_G1_H2_H3_H4_H5_H6_H7_H8_A8_B7_C6_D5_E4_F3_G2',
        H2: 'A2_B2_C2_D2_E2_F2_G2_H1_H3_H4_H5_H6_H7_H8_B8_C7_D6_E5_F4_G1_G3',
        H3: 'A3_B3_C3_D3_E3_F3_G3_H1_H2_H4_H5_H6_H7_H8_C8_D7_E6_F1_F5_G2_G4',
        H4: 'A4_B4_C4_D4_E4_F4_G4_H1_H2_H3_H5_H6_H7_H8_D8_E1_E7_F2_F6_G3_G5',
        H5: 'A5_B5_C5_D5_E5_F5_G5_H1_H2_H3_H4_H6_H7_H8_D1_E2_E8_F3_F7_G4_G6',
        H6: 'A6_B6_C6_D6_E6_F6_G6_H1_H2_H3_H4_H5_H7_H8_C1_D2_E3_F4_F8_G5_G7',
        H7: 'A7_B7_C7_D7_E7_F7_G7_H1_H2_H3_H4_H5_H6_H8_B1_C2_D3_E4_F5_G6_G8',
        H8: 'A8_B8_C8_D8_E8_F8_G8_H1_H2_H3_H4_H5_H6_H7_A1_B2_C3_D4_E5_F6_G7'
    },
    w: {
        A1: 'B1_C1_D1_E1_F1_G1_H1_A2_A3_A4_A5_A6_A7_A8',
        A2: 'B2_C2_D2_E2_F2_G2_H2_A1_A3_A4_A5_A6_A7_A8',
        A3: 'B3_C3_D3_E3_F3_G3_H3_A1_A2_A4_A5_A6_A7_A8',
        A4: 'B4_C4_D4_E4_F4_G4_H4_A1_A2_A3_A5_A6_A7_A8',
        A5: 'B5_C5_D5_E5_F5_G5_H5_A1_A2_A3_A4_A6_A7_A8',
        A6: 'B6_C6_D6_E6_F6_G6_H6_A1_A2_A3_A4_A5_A7_A8',
        A7: 'B7_C7_D7_E7_F7_G7_H7_A1_A2_A3_A4_A5_A6_A8',
        A8: 'B8_C8_D8_E8_F8_G8_H8_A1_A2_A3_A4_A5_A6_A7',
        B1: 'A1_C1_D1_E1_F1_G1_H1_B2_B3_B4_B5_B6_B7_B8',
        B2: 'A2_C2_D2_E2_F2_G2_H2_B1_B3_B4_B5_B6_B7_B8',
        B3: 'A3_C3_D3_E3_F3_G3_H3_B1_B2_B4_B5_B6_B7_B8',
        B4: 'A4_C4_D4_E4_F4_G4_H4_B1_B2_B3_B5_B6_B7_B8',
        B5: 'A5_C5_D5_E5_F5_G5_H5_B1_B2_B3_B4_B6_B7_B8',
        B6: 'A6_C6_D6_E6_F6_G6_H6_B1_B2_B3_B4_B5_B7_B8',
        B7: 'A7_C7_D7_E7_F7_G7_H7_B1_B2_B3_B4_B5_B6_B8',
        B8: 'A8_C8_D8_E8_F8_G8_H8_B1_B2_B3_B4_B5_B6_B7',
        C1: 'A1_B1_D1_E1_F1_G1_H1_C2_C3_C4_C5_C6_C7_C8',
        C2: 'A2_B2_D2_E2_F2_G2_H2_C1_C3_C4_C5_C6_C7_C8',
        C3: 'A3_B3_D3_E3_F3_G3_H3_C1_C2_C4_C5_C6_C7_C8',
        C4: 'A4_B4_D4_E4_F4_G4_H4_C1_C2_C3_C5_C6_C7_C8',
        C5: 'A5_B5_D5_E5_F5_G5_H5_C1_C2_C3_C4_C6_C7_C8',
        C6: 'A6_B6_D6_E6_F6_G6_H6_C1_C2_C3_C4_C5_C7_C8',
        C7: 'A7_B7_D7_E7_F7_G7_H7_C1_C2_C3_C4_C5_C6_C8',
        C8: 'A8_B8_D8_E8_F8_G8_H8_C1_C2_C3_C4_C5_C6_C7',
        D1: 'A1_B1_C1_E1_F1_G1_H1_D2_D3_D4_D5_D6_D7_D8',
        D2: 'A2_B2_C2_E2_F2_G2_H2_D1_D3_D4_D5_D6_D7_D8',
        D3: 'A3_B3_C3_E3_F3_G3_H3_D1_D2_D4_D5_D6_D7_D8',
        D4: 'A4_B4_C4_E4_F4_G4_H4_D1_D2_D3_D5_D6_D7_D8',
        D5: 'A5_B5_C5_E5_F5_G5_H5_D1_D2_D3_D4_D6_D7_D8',
        D6: 'A6_B6_C6_E6_F6_G6_H6_D1_D2_D3_D4_D5_D7_D8',
        D7: 'A7_B7_C7_E7_F7_G7_H7_D1_D2_D3_D4_D5_D6_D8',
        D8: 'A8_B8_C8_E8_F8_G8_H8_D1_D2_D3_D4_D5_D6_D7',
        E1: 'A1_B1_C1_D1_F1_G1_H1_E2_E3_E4_E5_E6_E7_E8',
        E2: 'A2_B2_C2_D2_F2_G2_H2_E1_E3_E4_E5_E6_E7_E8',
        E3: 'A3_B3_C3_D3_F3_G3_H3_E1_E2_E4_E5_E6_E7_E8',
        E4: 'A4_B4_C4_D4_F4_G4_H4_E1_E2_E3_E5_E6_E7_E8',
        E5: 'A5_B5_C5_D5_F5_G5_H5_E1_E2_E3_E4_E6_E7_E8',
        E6: 'A6_B6_C6_D6_F6_G6_H6_E1_E2_E3_E4_E5_E7_E8',
        E7: 'A7_B7_C7_D7_F7_G7_H7_E1_E2_E3_E4_E5_E6_E8',
        E8: 'A8_B8_C8_D8_F8_G8_H8_E1_E2_E3_E4_E5_E6_E7',
        F1: 'A1_B1_C1_D1_E1_G1_H1_F2_F3_F4_F5_F6_F7_F8',
        F2: 'A2_B2_C2_D2_E2_G2_H2_F1_F3_F4_F5_F6_F7_F8',
        F3: 'A3_B3_C3_D3_E3_G3_H3_F1_F2_F4_F5_F6_F7_F8',
        F4: 'A4_B4_C4_D4_E4_G4_H4_F1_F2_F3_F5_F6_F7_F8',
        F5: 'A5_B5_C5_D5_E5_G5_H5_F1_F2_F3_F4_F6_F7_F8',
        F6: 'A6_B6_C6_D6_E6_G6_H6_F1_F2_F3_F4_F5_F7_F8',
        F7: 'A7_B7_C7_D7_E7_G7_H7_F1_F2_F3_F4_F5_F6_F8',
        F8: 'A8_B8_C8_D8_E8_G8_H8_F1_F2_F3_F4_F5_F6_F7',
        G1: 'A1_B1_C1_D1_E1_F1_H1_G2_G3_G4_G5_G6_G7_G8',
        G2: 'A2_B2_C2_D2_E2_F2_H2_G1_G3_G4_G5_G6_G7_G8',
        G3: 'A3_B3_C3_D3_E3_F3_H3_G1_G2_G4_G5_G6_G7_G8',
        G4: 'A4_B4_C4_D4_E4_F4_H4_G1_G2_G3_G5_G6_G7_G8',
        G5: 'A5_B5_C5_D5_E5_F5_H5_G1_G2_G3_G4_G6_G7_G8',
        G6: 'A6_B6_C6_D6_E6_F6_H6_G1_G2_G3_G4_G5_G7_G8',
        G7: 'A7_B7_C7_D7_E7_F7_H7_G1_G2_G3_G4_G5_G6_G8',
        G8: 'A8_B8_C8_D8_E8_F8_H8_G1_G2_G3_G4_G5_G6_G7',
        H1: 'A1_B1_C1_D1_E1_F1_G1_H2_H3_H4_H5_H6_H7_H8',
        H2: 'A2_B2_C2_D2_E2_F2_G2_H1_H3_H4_H5_H6_H7_H8',
        H3: 'A3_B3_C3_D3_E3_F3_G3_H1_H2_H4_H5_H6_H7_H8',
        H4: 'A4_B4_C4_D4_E4_F4_G4_H1_H2_H3_H5_H6_H7_H8',
        H5: 'A5_B5_C5_D5_E5_F5_G5_H1_H2_H3_H4_H6_H7_H8',
        H6: 'A6_B6_C6_D6_E6_F6_G6_H1_H2_H3_H4_H5_H7_H8',
        H7: 'A7_B7_C7_D7_E7_F7_G7_H1_H2_H3_H4_H5_H6_H8',
        H8: 'A8_B8_C8_D8_E8_F8_G8_H1_H2_H3_H4_H5_H6_H7'
    },
    g: {
        A1: 'B2_C3_D4_E5_F6_G7_H8',
        A2: 'B1_B3_C4_D5_E6_F7_G8',
        A3: 'C1_B2_B4_C5_D6_E7_F8',
        A4: 'B3_C2_D1_B5_C6_D7_E8',
        A5: 'B4_C3_D2_E1_B6_C7_D8',
        A6: 'B5_C4_D3_E2_F1_B7_C8',
        A7: 'B6_C5_D4_E3_F2_G1_B8',
        A8: 'B7_C6_D5_E4_F3_G2_H1',
        B1: 'A2_C2_D3_E4_F5_G6_H7',
        B2: 'A1_A3_C1_C3_D4_E5_F6_G7_H8',
        B3: 'A2_A4_C2_C4_D1_D5_E6_F7_G8',
        B4: 'A3_A5_C3_D2_E1_C5_D6_E7_F8',
        B5: 'A4_A6_C4_D3_E2_F1_C6_D7_E8',
        B6: 'A5_A7_C5_D4_E3_F2_G1_C7_D8',
        B7: 'A6_A8_C6_D5_E4_F3_G2_H1_C8',
        B8: 'A7_C7_D6_E5_F4_G3_H2',
        C1: 'A3_B2_D2_E3_F4_G5_H6',
        C2: 'A4_B1_B3_D1_D3_E4_F5_G6_H7',
        C3: 'A1_A5_B2_B4_D2_D4_E1_E5_F6_G7_H8',
        C4: 'A2_A6_B3_B5_D3_D5_E2_E6_F1_F7_G8',
        C5: 'A3_A7_B4_B6_D4_D6_E3_E7_F2_F8_G1',
        C6: 'A4_A8_B5_B7_D5_D7_E4_E8_F3_G2_H1',
        C7: 'A5_B6_B8_D6_D8_E5_F4_G3_H2',
        C8: 'A6_B7_D7_E6_F5_G4_H3',
        D1: 'A4_B3_C2_E2_F3_G4_H5',
        D2: 'A5_B4_C1_C3_E1_E3_F4_G5_H6',
        D3: 'A6_B1_B5_C2_C4_E2_E4_F1_F5_G6_H7',
        D4: 'A1_A7_B2_B6_C3_C5_E3_E5_F2_F6_G1_G7_H8',
        D5: 'A2_A8_B3_B7_C4_C6_E4_E6_F3_F7_G2_G8_H1',
        D6: 'A3_B4_B8_C5_C7_E5_E7_F4_F8_G3_H2',
        D7: 'A4_B5_C6_C8_E6_E8_F5_G4_H3',
        D8: 'A5_B6_C7_E7_F6_G5_H4',
        E1: 'A5_B4_C3_D2_F2_G3_H4',
        E2: 'A6_B5_C4_D1_D3_F1_F3_G4_H5',
        E3: 'A7_B6_C1_C5_D2_D4_F2_F4_G1_G5_H6',
        E4: 'A8_B1_B7_C2_C6_D3_D5_F3_F5_G2_G6_H1_H7',
        E5: 'A1_B2_B8_C3_C7_D4_D6_F4_F6_G3_G7_H2_H8',
        E6: 'A2_B3_C4_C8_D5_D7_F5_F7_G4_G8_H3',
        E7: 'A3_B4_C5_D6_D8_F6_F8_G5_H4',
        E8: 'A4_B5_C6_D7_F7_G6_H5',
        F1: 'A6_B5_C4_D3_E2_G2_H3',
        F2: 'A7_B6_C5_D4_E1_E3_G1_G3_H4',
        F3: 'A8_B7_C6_D1_D5_E2_E4_G2_G4_H1_H5',
        F4: 'B8_C1_C7_D2_D6_E3_E5_G3_G5_H2_H6',
        F5: 'B1_C2_C8_D3_D7_E4_E6_G4_G6_H3_H7',
        F6: 'A1_B2_C3_D4_D8_E5_E7_G5_G7_H4_H8',
        F7: 'A2_B3_C4_D5_E6_E8_G6_G8_H5',
        F8: 'A3_B4_C5_D6_E7_G7_H6',
        G1: 'A7_B6_C5_D4_E3_F2_H2',
        G2: 'A8_B7_C6_D5_E4_F3_F1_H1_H3',
        G3: 'B8_C7_D6_E1_E5_F2_F4_H2_H4',
        G4: 'C8_D1_D7_E2_E6_F3_F5_H3_H5',
        G5: 'C1_D2_D8_E3_E7_F4_F6_H4_H6',
        G6: 'B1_C2_D3_E4_E8_F5_F7_H5_H7',
        G7: 'A1_B2_C3_D4_E5_F6_F8_H6_H8',
        G8: 'A2_B3_C4_D5_E6_F7_H7',
        H1: 'A8_B7_C6_D5_E4_F3_G2',
        H2: 'B8_C7_D6_E5_F4_G1_G3',
        H3: 'C8_D7_E6_F1_F5_G2_G4',
        H4: 'D8_E1_E7_F2_F6_G3_G5',
        H5: 'D1_E2_E8_F3_F7_G4_G6',
        H6: 'C1_D2_E3_F4_F8_G5_G7',
        H7: 'B1_C2_D3_E4_F5_G6_G8',
        H8: 'A1_B2_C3_D4_E5_F6_G7'
    },
    s: {
        A1: 'B3_C2',
        A2: 'B4_C1_C3',
        A3: 'B1_B5_C2_C4',
        A4: 'B2_B6_C3_C5',
        A5: 'B3_B7_C4_C6',
        A6: 'B4_B8_C5_C7',
        A7: 'B5_C6_C8',
        A8: 'B6_C7',
        B1: 'A3_C3_D2',
        B2: 'A4_C4_D1_D3',
        B3: 'A1_A5_C1_C5_D2_D4',
        B4: 'A2_A6_C2_C6_D3_D5',
        B5: 'A3_A7_C3_C7_D4_D6',
        B6: 'A4_A8_C4_C8_D5_D7',
        B7: 'A5_C5_D6_D8',
        B8: 'A6_C6_D7',
        C1: 'A2_B3_D3_E2',
        C2: 'A1_A3_B4_D4_E1_E3',
        C3: 'A2_A4_B1_B5_D1_D5_E2_E4',
        C4: 'A3_A5_B2_B6_D2_D6_E3_E5',
        C5: 'A4_A6_B3_B7_D3_D7_E4_E6',
        C6: 'A5_A7_B4_B8_D4_D8_E5_E7',
        C7: 'A6_A8_B5_D5_E6_E8',
        C8: 'A7_B6_D6_E7',
        D1: 'B2_C3_E3_F2',
        D2: 'B1_B3_C4_E4_F1_F3',
        D3: 'B2_B4_C1_C5_E1_E5_F2_F4',
        D4: 'B3_B5_C2_C6_E2_E6_F3_F5',
        D5: 'B4_B6_C3_C7_E3_E7_F4_F6',
        D6: 'B5_B7_C4_C8_E4_E8_F5_F7',
        D7: 'B6_B8_C5_E5_F6_F8',
        D8: 'B7_C6_E6_F7',
        E1: 'C2_D3_F3_G2',
        E2: 'C1_C3_D4_F4_G1_G3',
        E3: 'C2_C4_D1_D5_F1_F5_G2_G4',
        E4: 'C3_C5_D2_D6_F2_F6_G3_G5',
        E5: 'C4_C6_D3_D7_F3_F7_G4_G6',
        E6: 'C5_C7_D4_D8_F4_F8_G5_G7',
        E7: 'C6_C8_D5_F5_G6_G8',
        E8: 'C7_D6_F6_G7',
        F1: 'D2_E3_G3_H2',
        F2: 'D1_D3_E4_G4_H1_H3',
        F3: 'D2_D4_E1_E5_G1_G5_H2_H4',
        F4: 'D3_D5_E2_E6_G2_G6_H3_H5',
        F5: 'D4_D6_E3_E7_G3_G7_H4_H6',
        F6: 'D5_D7_E4_E8_G4_G8_H5_H7',
        F7: 'D6_D8_E5_G5_H6_H8',
        F8: 'D7_E6_G6_H7',
        G1: 'E2_F3_H3',
        G2: 'E1_E3_F4_H4',
        G3: 'E2_E4_F1_F5_H1_H5',
        G4: 'E3_E5_F2_F6_H2_H6',
        G5: 'E4_E6_F3_F7_H3_H7',
        G6: 'E5_E7_F4_F8_H4_H8',
        G7: 'E6_E8_F5_H5',
        G8: 'E7_F6_H6',
        H1: 'F2_G3',
        H2: 'F1_F3_G4',
        H3: 'F2_F4_G1_G5',
        H4: 'F3_F5_G2_G6',
        H5: 'F4_F6_G3_G7',
        H6: 'F5_F7_G4_G8',
        H7: 'F6_F8_G5',
        H8: 'F7_G6',
    }
}