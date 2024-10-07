import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const initialAnnouncements = [
    {
        id: '1',
        title: 'Earthquake Drill',
        department: 'Health and Safety Office',
        date: 'May 9 2024',
        pinned: false,
    },
    {
        id: '2',
        title: 'Fire Drill',
        department: 'Health and Safety Office',
        date: 'March 3 2024',
        pinned: false,
    }
];

const details = [
    {
        id: '1',
        topic: 'Earthquake Drill Announcement:',
        date: 'May 12, 2024',
        duration: '1:00 PM - 4:00 PM',
        message: 'Attention all AGAPAY users, In preparation for ensuring our community safety during seismic events, we are conducting an Earthquake Drill on May 12, 2024, between 1:00 PM and 4:00 PM. This drill is crucial for practicing emergency response procedures and enhancing our readiness for real-life earthquake scenarios',
    },
    {
        id: '2',
        topic: 'Fire Drill Announcement:',
        date: 'March 3, 2024',
        duration: '10:00 AM - 11:00 AM',
        message: 'Attention all AGAPAY users, A fire drill will be conducted on March 3, 2024, from 10:00 AM to 11:00 AM. This drill is an important part of ensuring the safety of our community. Please cooperate and participate in the drill by following the instructions of our safety personnel. The drill will include evacuation procedures and familiarization with emergency exits.',
    }
];

export default function Announcement() {
    const [announcements, setAnnouncements] = useState(initialAnnouncements);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAnnouncements, setFilteredAnnouncements] = useState(initialAnnouncements);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const sortAnnouncements = (announcements) => {
        return announcements.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredAnnouncements(announcements);
        } else {
            const filtered = announcements.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredAnnouncements(filtered);
        }
    };

    const handlePress = (item) => {
        setSelectedAnnouncement(item);
        const detail = details.find(detail => detail.id === item.id);
        setSelectedDetail(detail);
        setModalVisible(true);
    };

    const openMenu = (item) => {
        setSelectedAnnouncement(item);
        setMenuVisible(true);
    };

    const handleDelete = () => {
        const updatedAnnouncements = announcements.filter(a => a.id !== selectedAnnouncement.id);
        const sortedAnnouncements = sortAnnouncements(updatedAnnouncements);
        setAnnouncements(sortedAnnouncements);
        setFilteredAnnouncements(sortedAnnouncements);
        setMenuVisible(false);
    };

    const handlePin = () => {
        let updatedAnnouncements = announcements.map(a =>
            a.id === selectedAnnouncement.id ? { ...a, pinned: !a.pinned } : a
        );

        if (selectedAnnouncement.pinned === false) {
            updatedAnnouncements = updatedAnnouncements.map(a =>
                a.id !== selectedAnnouncement.id ? { ...a, pinned: false } : a
            );
        }

        const sortedAnnouncements = sortAnnouncements(updatedAnnouncements);
        setAnnouncements(sortedAnnouncements);
        setFilteredAnnouncements(sortedAnnouncements);
        setMenuVisible(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.announcementCard} onPress={() => handlePress(item)}>
            <View style={styles.flag} />
            <View style={styles.announcementContent}>
                <Text style={styles.departmentText}>{item.department}</Text>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    {item.pinned && <Icon name="push-pin" size={20} color="#800000" style={styles.pinIcon} />}
                </View>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => openMenu(item)}>
                <Icon name="more-vert" size={24} color="#800000" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}></Text>
                <View style={styles.headerIcons}>
                    {!searchVisible && (
                        <TouchableOpacity onPress={() => setSearchVisible(true)}>
                            <Icon name="search" size={24} color="#800000" />
                        </TouchableOpacity>
                    )}
                    {searchVisible && (
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search"
                                value={searchQuery}
                                onChangeText={handleSearch}
                            />
                            <TouchableOpacity onPress={() => setSearchVisible(false)}>
                                <Icon name="close" size={24} color="#800000" />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>

            <FlatList
                data={filteredAnnouncements}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTopic}>{selectedDetail && selectedDetail.topic}</Text>
                        <Text style={styles.modalDate}>Date: {selectedDetail && selectedDetail.date}</Text>
                        <Text style={styles.modalDuration}>Duration: {selectedDetail && selectedDetail.duration}</Text>
                        <Text style={styles.modalMessage}>{selectedDetail && selectedDetail.message}</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal visible={menuVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={handleDelete} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePin} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>
                                {selectedAnnouncement?.pinned ? 'Unpin' : 'Pin'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F0F0F0',
    },
    searchInput: {
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    listContent: {
        padding: 16,
    },
    announcementCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginVertical: 10,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    flag: {
        width: 15,
        height: 50,
        backgroundColor: '#800000',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 16,
    },
    announcementContent: {
        flex: 1,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    departmentText: {
        color: '#444',
        fontSize: 16,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 5,
    },
    dateText: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    pinIcon: {
        marginLeft: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 10,
        width: '80%',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    modalTopic: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 25,
        padding: 12,
        borderBottomWidth: 3,
        borderBottomColor: '#ddd',
    },
    modalDate: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    modalDuration: {
        fontSize: 16,
        marginBottom: 10,
        color: '#000',
    },
    modalMessage: {
        fontSize: 18,
        marginBottom: 10,
        paddingBottom: 15,
        paddingTop: 15,
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#800000',
        borderRadius: 20,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#800000',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});